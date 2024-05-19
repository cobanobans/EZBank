import Link from 'next/link'
import links from '@/utils/data'

const NavLinks = () => {
  return (
    <ul className='menu bg-inherit mt-20 pl-10 w-full rounded-lg gap-5'>
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className='capitalize h-12 flex items-center lg:text-l md:text-l'
            >
              {link.icon}
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
export default NavLinks
