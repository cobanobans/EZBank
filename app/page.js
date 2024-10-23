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
          <h1 className='mb-7 text-6xl text-accent font-bold leading-11'>
            EZ<span className='text-slate-400'>Bank</span>
          </h1>
          <p className='mb-5 text-xl'>
            Convenient, secure, and user-friendly online banking app for
            seamless financial management anytime, anywhere.
          </p>
          <Link href='/home' className='btn btn-accent mb-5'>
            Get Started
          </Link>
          <div className='bg-slate-300 text-slate-400 rounded-xl'>
            <h2 className='text-2xl '>Important Note:</h2>
            <p className='text-xl'>
              Test account:
              <span className='text-secondary'>
                {' '}
                djolej17@gmail.com ---
              </span>{' '}
              and password: <span className='text-secondary'>DjordjeTest</span>
            </p>
            <p className='text-accent'>or create your own Account.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomePage
