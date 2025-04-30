import type { Metadata } from 'next'
import PageTemplate from '@/components/PageTemplate'

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
    <PageTemplate title="About Southpaw Space">
      <main className="prose lg:prose-xl space-y-8">
        <p>
          <strong>Southpaw Space</strong> was born out of one simple frustration: as a left-handed fighter, I found almost no high-quality, southpaw-specific training resources online. After years competing in boxing, kickboxing, and earning my black belt in karate, I realised that most tutorials, drills and combos are built for orthodox fighters—and recycled endless “mirrored” advice that never quite worked for me.
        </p>

        <p>
          Through the generosity of a few southpaw coaches, I picked up techniques and insights I couldn’t find anywhere else. I knew there had to be more of us out there looking for targeted guidance. So, even as I continue my own journey as a student and budding coach, I created Southpaw Space to share everything I learn—so you don’t have to hunt for those hidden gems.
        </p>

        <h2 className="text-2xl font-semibold mt-12">Our Mission &amp; Vision</h2>
        <ul>
          <li><strong>Mission:</strong> Empower fighters—southpaw and orthodox alike—with practical drills, strategic breakdowns, and gear reviews that leverage the unique angles and timing of a left-handed stance.</li>
          <li><strong>Vision:</strong> Build a hub where left-handers and orthodox fighters alike can sharpen their skills, swap insights, and push the art of fighting forward.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12">Who’s Behind the Gloves</h2>
        <p>
          I’m a dedicated mixed martial arts student who’s trained and competed across disciplines—from the boxing ring to the karate dojo and the kickboxing cage. Today, I also coach, helping fighters translate southpaw strategies into real-world results.
        </p>

        <h2 className="text-2xl font-semibold mt-12">Why Southpaw Space?</h2>
        <ul>
          <li><strong>Southpaw-First Content:</strong> Every technique is designed around left-handed angles and counters.</li>
          <li><strong>Cross-Discipline Approach:</strong> Techniques and drills that work in boxing, kickboxing, MMA, and more.</li>
        </ul>
      </main>
    </PageTemplate>
  )
}
