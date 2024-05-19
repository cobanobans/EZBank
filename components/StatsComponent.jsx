'use server'
import { getBalance, getCurrentMonthTransactions } from '@/utils/actions'

const StatsComponent = async ({ userId }) => {
  const balance = (await getBalance(userId)).toFixed(2)
  const numberOfTrans = await getCurrentMonthTransactions(userId)
  const now = new Date()

  const currentMonth = now.toLocaleString('default', { month: 'long' })
  const currentYear = now.getFullYear()

  return (
    <div className='stats stats-vertical bg-primary text-primary-content '>
      <div className='stat'>
        <div className='stat-title'>Account balance</div>
        <div className='stat-value'>${balance}</div>
        <div className='stat-actions'>
          <button className='btn btn-sm btn-success'>Add funds</button>
        </div>
      </div>

      <div className='stat'>
        <div className='stat-title'>
          <span className='font-bold mr-2'>{numberOfTrans.length}</span>
          transactions made in
        </div>
        <div className='stat-value'>
          {currentMonth} {currentYear}
        </div>
        <div className='stat-actions'>
          <button className='btn btn-sm btn-accent'>Pay now</button>
          <button className='btn btn-sm btn-success ml-1'>Deposit</button>
        </div>
      </div>
    </div>
  )
}
export default StatsComponent
