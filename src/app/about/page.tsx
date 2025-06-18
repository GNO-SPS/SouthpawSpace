import type { Metadata } from 'next'
import PageTemplate from '@/components/PageTemplate'
// import StickyNewsletterBar from '@/components/StickyNewsletterBar' // 🔕 Disabled for now — see note below

export const metadata: Metadata = {
  // ... unchanged
}

export default function AboutPage() {
  return (
    <>
      {/* 🔕 StickyNewsletterBar temporarily disabled
          The slide-in form on guide pages currently covers newsletter collection.
          You can re-enable <StickyNewsletterBar /> here later if needed. */}

      <main className="prose lg:prose-xl space-y-8">
        <PageTemplate title="About Southpaw Space" showNewsletter={false}>
          <p>
            <strong>Southpaw Space</strong> was born out of one simple frustration...
          </p>

          <p>
            Through the generosity of a few southpaw coaches...
          </p>

          <h2 className="text-2xl font-semibold mt-12">Our Mission &amp; Vision</h2>
          <ul>
            <li><strong>Mission:</strong> Empower fighters...</li>
            <li><strong>Vision:</strong> Build a hub...</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12">Who’s Behind the Gloves</h2>
          <p>I’m a dedicated mixed martial arts student...</p>

          <h2 className="text-2xl font-semibold mt-12">Why Southpaw Space?</h2>
          <ul>
            <li><strong>Southpaw-First Content:</strong> Every technique...</li>
            <li><strong>Cross-Discipline Approach:</strong> Techniques and drills...</li>
          </ul>
        </PageTemplate>
      </main>
    </>
  )
}
