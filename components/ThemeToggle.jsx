'use client'
import { useEffect, useState } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

const themes = {
  business: 'business',
  fantasy: 'corporate',
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.business)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        setTheme(savedTheme)
      }
      document.documentElement.setAttribute(
        'data-theme',
        savedTheme || themes.business
      )
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme =
      theme === themes.business ? themes.fantasy : themes.business
    setTheme(newTheme)
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme)
    }
  }

  return (
    <button className='bg-inherit' onClick={toggleTheme}>
      {theme === themes.business ? <BsMoonFill /> : <BsSunFill />}
    </button>
  )
}
export default ThemeToggle
