## Note

Note: Please use following credentials to login: djolej17@gmail.com (email) and DjordjeTest(password). Or create your own account, which is easy and fast, just provide email and password.

Also in order to make a payment, user has to enter valid email address (one of the registered users). Available emails of registered users will be displayed in the input field when clicked.

Here is the list of available emails if needed: 1danilojocic1@gmail.com, djolej17@gmail.com;

There is no option to enter app without logging in, this is because components and other crucial information displayed in components depend on user authentication.

<!-- ___________________ -->

## Database and Auth

I have deployed my Prisma managed database to Render and actions that interact with the database also depend on user authentication.

Clerk's auth and currentUser were at first used inside actions, which later created bug. In order to debug it, I had to remove auth and currentUser imports from actions, and pass them through component's props from page. The better solution which doesn't create any bugs will be found and implemented soon.

## Home Page

Users can see their balance on the home page and on the transactions page. On the home page, there is a chart displaying statistics and visually describing previous transactions for the current month.

Additionally, the home page features three fields that display the user's balance in three different currencies, handled through a currency API that checks for the latest rates.

## Deposit page

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
