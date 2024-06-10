import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <>
      {/* <div className='h-screen flex items-center justify-center bg-base-100'> */}
      <div className='h-screen flex flex-col items-center justify-center bg-base-100'>
        <SignIn
          initialValues={{
            emailAddress: 'djolej17@gmail.com',
          }}
        />
        <div className='bg-accent text-black px-8 pb-4 pt-2 rounded-b-lg'>
          <p>Login credentials:</p>
          <p>
            email: <span className='text-white'>djolej17@gmail.com</span>
          </p>
          <p>
            password: <span className='text-white'>DjordjeTest</span>
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}
export default SignInPage
