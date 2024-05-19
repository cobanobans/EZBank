import { getAllTransactions } from '@/utils/actions'
import { MdExpandMore } from 'react-icons/md'
const AllTransactions = async ({ userId }) => {
  const transactions = await getAllTransactions(userId)
  return (
    <div className='bg-base-100 md:px-20 lg:px-0'>
      <h2 className='mb-5 ml-5'>Previous Transactions:</h2>
      <ul className=' flex flex-col items-center'>
        {transactions.map((transaction) => {
          const { increment, amount, createdAt, id } = transaction
          return (
            <li key={id} className='collapse mt-3'>
              <input type='checkbox' className='peer' />
              <div className='collapse-title flex flex-row bg-secondary justify-between'>
                <div>${amount}</div>
                <div className='hidden lg:flex'>
                  {createdAt.toLocaleString()}
                </div>
                <div className='flex flex-row items-center justify-center gap-5'>
                  {increment === true ? (
                    <div className='badge badge-success rounded-lg '>
                      income
                    </div>
                  ) : (
                    <div className='badge badge-error rounded-lg'>expense</div>
                  )}
                  <span className='lg:hidden flex flex-row items-center'>
                    <p>details</p>
                    <MdExpandMore />
                  </span>
                </div>
              </div>
              <div className='collapse-content bg-base-300 lg:hidden flex flex-row gap-2 justify-center'>
                <div>date created:</div>
                <div>{createdAt.toLocaleString()}</div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default AllTransactions
