'use client'
import { checkPayment, createTransaction } from '@/utils/actions'
import { useState } from 'react'
import toast from 'react-hot-toast'

// kad se stavi client ne radi nista i bag je await currentUser() ?

const NewTransactionForm = ({ type, userEmail, userId }) => {
  const [isReady, setIsReady] = useState(false)

  const handleReadyState = async () => {
    const response = await checkPayment(email, amount, type, userId)

    if (!response.success) {
      // console.log('success')
      return toast.error(response.message)
    } else {
      if (amount < 0.1) {
        return toast.error('Amount has to be higher than 0,00 USD')
      } else {
        const newState = isReady === false ? true : false
        setIsReady(newState)
      }
    }
  }

  const [amount, setAmount] = useState('0.00')
  const [email, setEmail] = useState('')

  const handleEmail = (e) => {
    const inputValue = e.target.value
    setEmail(inputValue)
  }

  const handleInputChange = (e) => {
    const inputValue = e.target.value
    setAmount(inputValue)
  }

  const success = () => {
    toast.success('Transaction created successfully!')
  }

  return (
    <div className='flex flex-col  bg-base-300 py-20 px-2 rounded-xl '>
      <div className=' bg-accent rounded-t-xl py-2'>
        <span className='text-white pl-5'>
          {type === 'deposit'
            ? 'Please enter the amount to deposit'
            : 'Please fill in the form'}
        </span>
      </div>
      <form action={createTransaction}>
        <div className='w-full flex flex-col  items-center gap-4'>
          <input type='hidden' name='userId' value={userId} />
          <input type='hidden' name='userEmail' value={userEmail} />
          <input type='hidden' name='type' value={type} />
          {type !== 'deposit' ? (
            <input
              type='string'
              className='input input-bordered join-item w-full'
              placeholder="Enter Recipient's email"
              name='recipient'
              defaultValue={email}
              onChange={handleEmail}
              required
            ></input>
          ) : null}
          <input
            type='number'
            step='0.10'
            className='input input-bordered join-item w-full rounded-b-xl'
            placeholder='Enter Amount'
            name='amount'
            defaultValue={amount}
            // value=''
            onChange={handleInputChange}
            required
          />
          {isReady === false && (
            <button
              type='button'
              onClick={handleReadyState}
              className='btn btn-primary join-item'
            >
              Create Transaction
            </button>
          )}

          {isReady && (
            <button
              type='submit'
              onClick={success}
              className='btn btn-accent w-40 join-item uppercase'
              disabled={isReady === false}
            >
              confirm
            </button>
          )}
          {isReady && (
            <button
              type='button'
              onClick={handleReadyState}
              className='btn btn-secondary join-item uppercase w-40'
              disabled={isReady === false}
            >
              Decline
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default NewTransactionForm
