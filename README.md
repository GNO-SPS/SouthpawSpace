## Southpaw Space
A content site for left-handed fighters built with Next.js 15, Tailwind CSS, and TypeScript. The project integrates Google Analytics and the Kit newsletter widgets for capturing subscribers.

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

## Building for Production

```bash
npm run build
npm start
```

## Environment Variables
Create a .env.local file and add:

NEXT_PUBLIC_GA_ID=G-6HFGC2C9Z1
NEXT_PUBLIC_SLIDEIN_UID=76aaf8cbd0
NEXT_PUBLIC_STICKY_UID=26f236d1f6

## Deployment Notes
The site is optimized for deployment on platforms like Vercel.
Make sure your environment variables are configured in the hosting service before running next build.

