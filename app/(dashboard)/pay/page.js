import TransactionComponent from '@/components/TransactionComponent'
import { auth, currentUser } from '@clerk/nextjs/server'

const PayPage = async () => {
  const user = await currentUser()
  const userEmail = user.emailAddresses[0].emailAddress
  const { userId } = auth()
  return (
    <>
      <TransactionComponent
        type='payment'
        userId={userId}
        userEmail={userEmail}
      />
    </>
  )
}
export default PayPage
