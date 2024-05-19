import { currentUser } from '@clerk/nextjs/server'

const Profile = async () => {
  const user = await currentUser()

  return (
    <div className='hidden  md:flex items-center gap-3 '>
      <div>{user?.emailAddresses[0].emailAddress}</div>
    </div>
  )
}
export default Profile
