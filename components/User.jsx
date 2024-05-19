'use client'

import { UserButton } from '@clerk/clerk-react'
import { useState, useEffect } from 'react'

const User = () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])

  return (
    <>
      {isReady && <UserButton />}
      {}
    </>
  )
}
export default User
