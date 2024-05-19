import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EZbank',
  description: 'E-banking bla bla bla',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
