import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center bg-base-100'>
        <SignUp />
      </div>
    </>
  )
}
export default SignUpPage
