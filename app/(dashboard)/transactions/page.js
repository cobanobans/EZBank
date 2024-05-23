import AllTransactions from '@/components/AllTransactions'
import StatsComponent from '@/components/StatsComponent'
import { auth } from '@clerk/nextjs/server'

const TransactionsPage = async () => {
  // const { highlightLast } = router.query
  const { userId } = auth()
  return (
    <div className='flex flex-col items-start items-center w-full lg:px-20'>
      <StatsComponent userId={userId} />
      <div className='mt-10 w-full'>
        <AllTransactions userId={userId} />
      </div>
    </div>
  )
}
export default TransactionsPage
