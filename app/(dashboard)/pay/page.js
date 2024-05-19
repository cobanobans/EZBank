import TransactionComponent from '@/components/TransactionComponent'
import { auth } from '@clerk/nextjs/server'

const PayPage = () => {
  const { userId } = auth()
  return (
    <>
      <TransactionComponent type='payment' userId={userId} />
    </>
  )
}
export default PayPage
