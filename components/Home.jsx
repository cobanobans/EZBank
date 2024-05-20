import { createNewUser } from '@/utils/actions'
import { currentUser } from '@clerk/nextjs/server'

import Link from 'next/link'
import { GrTransaction } from 'react-icons/gr'
import { RiUserSettingsFill } from 'react-icons/ri'

import Currencies from './Currencies'

const Home = async ({ userId }) => {
  const user = await currentUser()

  await createNewUser(user?.emailAddresses[0].emailAddress, userId)
  return (
    <>
      <div className='w-full'>
        {/* <h1 className='hidden lg:flex capitalize text-2xl h-fit'>home</h1> */}
        {/* ------------ */}
        <div className='w-full p-5 lg:border-2 shadow-2xl bg-base-200 lg:rounded-xl'>
          <Currencies userId={userId} />
        </div>
        {/* ----------- */}
        {/* LINKS */}
        <div className='flex flex-col w-full lg:flex-row lg:items-start items-center justify-center gap-0 lg:gap-4 mt-10 lg:bg-base-200 lg:rounded-xl lg:shadow-xl'>
          <div className='w-full lg:w-3/4 lg:flex lg:flex-row lg:gap-2 lg:justify-center lg:items-center  lg:py-5 shadow-xl lg:shadow-none'>
            {/* -----TRANSACTIONS----- */}
            <div className='w-full lg:w-1/3'>
              <div className='bg-accent rounded-t-xl'>
                <h2 className='text-center text-white'>Transactions</h2>
              </div>
              <div className='w-full tooltip' data-tip='Go to Transactions'>
                <Link href='/transactions'>
                  <div className='bg-secondary flex flex-col items-center  py-4 shadow-xl hover:shadow-2xl'>
                    <span className=' text-3xl lg:text-5xl text-white'>
                      <GrTransaction />
                    </span>
                    <p className='lg:text-xl text-white'>See All</p>
                  </div>
                </Link>
              </div>
            </div>
            {/* -------END OF TRANSACTIONS------- */}

            {/* -------PROFILE----- */}
            <div className='w-full lg:w-1/3 '>
              <div className='bg-accent '>
                <h2 className='text-center text-white'>Profile Settings</h2>
              </div>
              <div className='w-full tooltip' data-tip='Go to Profile'>
                <Link href='/profile'>
                  <div className='bg-secondary flex flex-col items-center  py-4 shadow-xl hover:shadow-2xl rounded-b-xl lg:'>
                    <span className=' text-3xl lg:text-5xl text-white'>
                      <RiUserSettingsFill />
                    </span>
                    <p className='lg:text-xl text-white '>Profile</p>
                  </div>
                </Link>
              </div>
            </div>
            {/* ----END OF PROFILE */}
          </div>
        </div>
        {/* -------END OF LINKS----- */}
      </div>
    </>
  )
}
export default Home
