import { BsBank } from 'react-icons/bs'

const SidebarHeader = () => {
  return (
    <div className='flex items-baseline gap-4 p-4 lg:px-12'>
      <BsBank className='lg:w-12 lg:h-12 w-8 h-8' />
      <h2 className='text-2xl lg:text-3xl font-semibold text-accent'>EZBank</h2>
    </div>
  )
}
export default SidebarHeader
