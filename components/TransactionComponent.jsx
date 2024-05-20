import NewTransactionForm from './NewTransactionForm'
import StatsComponent from './StatsComponent'

const TransactionComponent = ({ type, userId, userEmail }) => {
  return (
    <div className='flex flex-col-reverse py-20 md:flex-row lg:w-full items-center justify-between bg-base-200 rounded-xl shadow-xl gap-10 lg:gap-5'>
      <div className='w-1/3 lg:w-2/3 px-10'>
        <NewTransactionForm type={type} userEmail={userEmail} userId={userId} />
      </div>
      <div className='px-10'>
        <StatsComponent userId={userId} />
      </div>
    </div>
  )
}
export default TransactionComponent
