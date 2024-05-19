'use client'

import links from '@/utils/data'
import Link from 'next/link'

const MenuLinks = () => {
  return (
    <ul className='menu bg-base-100 flex flex-row justify-between'>
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className='capitalize h-15   m-0 border-gray-600 flex items-center text-2xl'
            >
              {link.icon}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
export default MenuLinks
