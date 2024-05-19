import Profile from './Profile'
import SidebarHeader from './SidebarHeader'
import ThemeToggle from './ThemeToggle'
import User from '@/components/User'

const Navbar = () => {
  return (
    <div className='navbar fixed z-10 bg-base-100'>
      <div className='flex-1 lg:hidden'>
        <SidebarHeader />
      </div>
      <div className='flex-none gap-4 lg:fixed lg:flex lg:flex-row lg:top-4 lg:right-4'>
        <ThemeToggle />
        <Profile />
        <User />
      </div>
    </div>
  )
}
export default Navbar
