// import { authMiddleware } from '@clerk/nextjs'

// export default authMiddleware({
//   publicRoutes: ['/'],
// })

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}

// UPDATE!

// Updated clerk middleware

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher([
  '/deposit(.*)',
  '/home(.*)',
  '/pay(.*)',
  '/profile(.*)',
  '/transactions(.*)',
  '/withdrawal(.*)',
])

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect()
})
