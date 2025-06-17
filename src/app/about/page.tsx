//src/app/about/page.tsx

import type { Metadata } from 'next'
import PageTemplate from '@/components/PageTemplate'
import StickyNewsletterBar from '@/components/StickyNewsletterBar'

export const metadata: Metadata = {
  title: 'About Southpaw Space',
  description: 'Learn about Southpaw Space, your hub for left-handed fighters with targeted drills, strategies, and gear reviews.',
  openGraph: {
    title: 'About Southpaw Space',
    description: 'Learn about Southpaw Space, your hub for left-handed fighters with targeted drills, strategies, and gear reviews.',
    url: 'https://southpaw-space.vercel.app/about',
    siteName: 'Southpaw Space',
    images: [
      {
        url: 'https://southpaw-space.vercel.app/og-image-about.png',
        width: 1200,
        height: 630,
        alt: 'About Southpaw Space'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default function AboutPage() {
  return (
    <>
      <StickyNewsletterBar />
      <PageTemplate title="About Southpaw Space" showNewsletter={false}>
        <main className="prose lg:prose-xl space-y-8">
          {/* your content unchanged */}
        </main>
      </PageTemplate>
    </>
  )
}
