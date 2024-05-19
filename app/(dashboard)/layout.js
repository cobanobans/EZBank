import MenuLinks from '@/components/MenuLinks'

import Sidebar from '@/components/Sidebar'

import Navbar from '@/components/Navbar'

const layout = ({ children }) => {
  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content bg-base-100 lg:bg-base-100'>
        <Navbar />

        <div className='px-0 lg:px-8 py-20 min-h-screen mt-5'>{children}</div>

        <div className='lg:hidden fixed z-10'>
          <div className='fixed bottom-0 w-full border-t-2'>
            <MenuLinks />
          </div>
        </div>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-2'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <Sidebar />
      </div>
    </div>
  )
}
export default layout
