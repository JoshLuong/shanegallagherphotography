This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Content

All content is saved on contentful and retrieved via GraphQL calls. When making updates to the GQL types in contentful, make sure to run `yarn compile` to update the types. You also need to make sure `gql.ts` has documents type `any`.

## Deploying

Pages can be deployed via netlify - any push to main branch will trigger a deploy.

