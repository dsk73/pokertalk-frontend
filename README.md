This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



1. Forum from Nav Bar (if not done remove it) --- Done
2. remove search Bar --- Done
3. Strategy (coming soon) 
4. For Poker Shops  
5. Login/Signup can be add later   -- Done



pokertalk (on desktop) 
|__pokertalk-frontend
|   |__ .next
|   |__ app
|       |__ favicon.ico
|       |__ layout.tsx
|       |__ page.tsx
|       |__ (all pages folder)
|            |__ page.tsx
|            |__ [id]
|                |__ page.tsx  
|   |__ components
|       |__ common
|           |__ AuthForm.tsx
|           |__ Footer.tsx
|           |__ Header.tsx
|           |__ Heading.tsx
|           |__ SessionWrapper.tsx
|           |__ SideContent.tsx
|           |__ SubPageLayout.tsx
|           |__ ThemeToggle.tsx
|       |__ home
|           |__ About.tsx
|           |__ Banner.tsx
|           |__ Forum.tsx
|           |__ LatestNews.tsx
|           |__ LiveEvents.tsx
|           |__ OnlineEvents.tsx
|           |__ ShortSummary.tsx
|           |__ ShortVideos.tsx
|           |__ Strategy.tsx
|           |__ TopStories.tsx
|       |__ layout
|           |__ MainLayout.tsx
|       |__ sideContent
|           |__ Adbanner.tsx
|           |__ Contribute.tsx
|           |__ GalleryBanner.tsx
|           |__ HandVideos.tsx
|           |__ TopPokerRooms.tsx
|       |__ ClientLayout.tsx
|       |__ LoginForm.tsx
|       |__ NewsList.tsx
|       |__ SignupForm.tsx
|   |__ lib
|       |__ api.ts
|       |__ auth.ts
|   |__ node_modules
|   |__ providers
|       |__ ThemeProvider.tsx
|   |__ public
|       |__ gallery
|       |__ images
|       |__ uploads
|       |__ logo-light.png
|       |__ logo-dark.png
|   |__ styles
|       |__ common
|           |__ authform.module.css
|           |__ footer.module.css
|           |__ header.module.css
|           |__ heading.module.css
|           |__ sideContent.module.css
|           |__ subPageLayout.module.css
|       |__ home
|           |__ about.module.css
|           |__ banner.module.css
|           |__ forum.module.css
|           |__ latestNews.module.css
|           |__ liveEvents.module.css
|           |__ onlineEvents.module.css
|           |__ shortSummary.module.css
|           |__ shortVideos.module.css
|           |__ strategy.module.css
|           |__ topStories.module.css
|       |__ layout
|           |__ mainlayout.module.css
|       |__ pages
|           |__ eventsPage.module.css
|           |__ forumPage.module.css
|           |__ gallery.module.css
|           |__ news.module.css
|           |__ strategy.module.css
|           |__ summaryPage.module.css
|       |__ sideContent
|           |__ adBanner.module.css
|           |__ contribute.module.css
|           |__ galleryBanner.module.css
|           |__ handVideos.module.css
|           |__ topPokerRooms.module.css
|       |__ banner.module.css
|       |__ globals.css
|       |__ header.module.css
|       |__ pageLayout.module.css
|       |__ section.module.css
|   |__ .env.local
|   |__ .gitignore
|   |__ eslint.congig.mjs
|   |__ next-env.d.td
|   |__ next.config.ts
|   |__ package-lock.json
|   |__ package.json
|   |__ postcss.config.js
|   |__ README.md
|   |__ tailwind.config.js (not of use)
|   |__ tsconfig.json
|__pokertalk-backend
|   |__ .strapi
|   |__ .tmp
|   |__ build
|   |__ config
|   |__ database
|   |__ node_modules
|   |__ public
|       |__ uploads
|       |__ robots.txt
|   |__ src
|       |__ admin
|       |__ api
|       |__ extensions
|       |__ index.js
|   |__ types
|   |__ .editorconfig
|   |__ .env
|   |__ .env.example
|   |__ .eslintignore
|   |__ .eslintrc
|   |__ .gitignore
|   |__ .strapi-updater.json
|   |__ favicon.png
|   |__ jsconfig.json
|   |__ package-lock.json
|   |__ package.json
|   |__ README.md
|__gitignore 
|__package-lock.json
|__package.json