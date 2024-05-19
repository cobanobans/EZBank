'use server'

import { getBalance, getCurrentMonthTransactions } from '@/utils/actions'
import { Chart } from './Chart'

const ChartComponent = async ({ userId }) => {
  const CurrentMonthTrans = await getCurrentMonthTransactions(userId)

  const incomes = CurrentMonthTrans.filter((transaction) => {
    const incomeTransaction = transaction.increment === true

    return incomeTransaction
  })
  const expenses = CurrentMonthTrans.filter((transaction) => {
    const expenseTransaction = transaction.increment === false
    return expenseTransaction
  })
  const totalIncome = incomes.reduce((sum, transaction) => {
    return sum + transaction.amount
  }, 0)
  const totalExpense = expenses.reduce((sum, transaction) => {
    return sum + transaction.amount
  }, 0)
  console.log(totalExpense)
  // console.log(totalIncome)

  // const locale = 'en-US'
  // const labels = [
  //   CurrentMonthTrans[0].createdAt.toLocaleDateString(locale, {
  //     month: 'long',
  //   }),
  // ]

  const data = {
    labels: ['expesnses', 'incomes'],
    datasets: [
      {
        label: 'USD',
        data: [totalExpense, totalIncome],
        backgroundColor: ['rgba(255, 99, 99, 0.852)', 'rgba(54, 235, 54,0.8)'],
        // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        // borderWidth: 1,
      },
    ],
  }

  const textCenter = (await getBalance(userId)).toFixed(2)

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Incomes',
  //       data: [totalIncome],
  //       backgroundColor: ' rgba(22, 225, 73, 0.5)',
  //     },
  //     // {
  //     //   label: 'expenses',
  //     //   data: [totalExpense],
  //     //   backgroundColor: 'rgba(179, 54, 81, 0.5)',
  //     // },
  //   ],
  // }
  return (
    <div>
      <Chart data={data} textCenter={textCenter} />
    </div>
  )
}
export default ChartComponent
