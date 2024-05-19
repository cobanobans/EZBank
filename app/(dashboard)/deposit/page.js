import TransactionComponent from '@/components/TransactionComponent'
import { auth, currentUser } from '@clerk/nextjs/server'

const DepositPage = async () => {
  const user = await currentUser()
  const userEmail = user.emailAddresses[0].emailAddress
  const { userId } = auth()
  return (
    <>
      <TransactionComponent
        type='deposit'
        userId={userId}
        userEmail={userEmail}
      />
      {/* <NewTransactionForm type='deposit' /> */}
    </>
  )
}
export default DepositPage
