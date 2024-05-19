import NavLinks from './NavLinks'
import SidebarHeader from './SidebarHeader'

const sidebar = () => {
  return (
    <div className='px-6 bg-base-200 w-full min-h-full py-10 grid grid-rows-[auto,1fr]'>
      {/* header */}
      <SidebarHeader />
      {/* links */}
      <div className='w-full'>
        <NavLinks />
      </div>
    </div>
  )
}
export default sidebar
