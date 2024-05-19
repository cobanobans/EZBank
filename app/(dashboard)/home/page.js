import Home from '@/components/Home'
import { auth } from '@clerk/nextjs/server'
const HomePage = async ({}) => {
  const { userId } = auth()
  return <Home userId={userId} />
}
export default HomePage
