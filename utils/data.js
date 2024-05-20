import { IoHomeOutline } from 'react-icons/io5'
import { FaHandHoldingUsd } from 'react-icons/fa'
import { MdOutlinePayments } from 'react-icons/md'
import { GrTransaction } from 'react-icons/gr'
import { FaMoneyBillTrendUp } from 'react-icons/fa6'

const links = [
  { href: '/home', label: 'home', icon: <IoHomeOutline /> },
  { href: '/deposit', label: 'Deposit', icon: <MdOutlinePayments /> },
  { href: '/pay', label: 'pay', icon: <FaMoneyBillTrendUp /> },
  { href: '/transactions', label: 'transactions', icon: <GrTransaction /> },
  // { href: '/withdrawal', label: 'withdrawal', icon: <FaHandHoldingUsd /> },
]

export default links
