'use server'

import prisma from './db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const createNewUser = async (email, userId) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
  if (existingUser) {
    return console.log('user exists')
  }

  await prisma.user.create({
    data: {
      id: userId,
      email: email,
    },
  })
}

export const createTransaction = async (formData) => {
  const userId = formData.get('userId')
  const userEmail = formData.get('userEmail')
  const balance = await getBalance(userId)
  const transactionType = formData.get('type')
  const amount = parseFloat(formData.get('amount'))
  const recipientUser = formData.get('recipient')
    ? formData.get('recipient')
    : null

  if (transactionType !== 'deposit' && amount > balance) {
    return { success: false, message: 'Not enough' }
  }

  await prisma.transaction.create({
    data: {
      user: { connect: { email: userEmail } },
      amount: amount,
      increment: transactionType === 'deposit' ? true : false,
    },
  })

  await prisma.user.update({
    where: { email: userEmail },
    data: {
      balance:
        transactionType === 'deposit'
          ? { increment: amount }
          : { decrement: amount },
    },
  })

  if (recipientUser) {
    await prisma.transaction.create({
      data: {
        user: { connect: { email: recipientUser } },
        amount: amount,
        increment: true,
      },
    })

    await prisma.user.update({
      where: { email: recipientUser },
      data: {
        balance: { increment: amount },
      },
    })
  }
  revalidatePath('/transactions')
  redirect('/transactions')
}

export const getBalance = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      transactions: true,
    },
  })
  console.log(user.balance, 'aaaaaa')
  return user.balance
}

export const getAllTransactions = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      transactions: { orderBy: { createdAt: 'desc' } },
    },
  })
  // ---------------

  // ----------------
  return user.transactions
}

export const checkPayment = async (email, amount, type, userId) => {
  const balance = await getBalance(userId)
  try {
    const users = await prisma.user.findMany()
    const allEmails = users.map((user) => {
      return user.email
    })
    if (email && !allEmails.includes(email.toString())) {
      throw new Error('Email not found!')
    }
    if (type === 'payment' && !email) {
      throw new Error('Email field is empty!')
    }
    if (type === 'payment' && amount > balance) {
      throw new Error('Insufficient balance!')
    }
    return { success: true }
  } catch (error) {
    return { success: false, message: error.message }
  }
}

export const getCurrentMonthTransactions = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      transactions: true,
    },
  })

  const now = new Date()

  const currentMonth = now.getMonth()
  const currentYear = now.getFullYear()
  const currentMonthTransactions = user.transactions.filter((transaction) => {
    const transactionDate = transaction.createdAt
    return (
      transactionDate.getMonth() === currentMonth &&
      transactionDate.getFullYear() === currentYear
    )
  })
  return currentMonthTransactions
}
