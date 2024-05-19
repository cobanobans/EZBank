import Link from 'next/link'

const HomePage = () => {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/45111/pexels-photo-45111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        backgroundSize: 'cover',
        // height: '100vh',
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-7 text-6xl text-primary font-bold leading-11'>
            EZ<span className='text-slate-400'>Bank</span>
          </h1>
          <p className='mb-5 text-xl'>
            Convenient, secure, and user-friendly online banking app for
            seamless financial management anytime, anywhere.
          </p>
          <Link href='/home' className='btn btn-secondary'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}
export default HomePage
