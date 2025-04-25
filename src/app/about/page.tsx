import PageTemplate from '@/components/PageTemplate'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <PageTemplate title="About Southpaw Space">
      <main className="max-w-3xl mx-auto py-16 px-4 prose lg:prose-xl">
        <p>
          <strong>Southpaw Space</strong> was born out of one simple frustration: as a left-handed fighter, I found almost no high-quality, southpaw-specific training resources online. After years competing in boxing, kickboxing, and earning my black belt in karate, I realised that most tutorials, drills and combos are built for orthodox fighters—and recycled endless “mirrored” advice that never quite worked for me.
        </p>

        <p>
          Through the generosity of a few southpaw coaches, I picked up techniques and insights I couldn’t find anywhere else. I knew there had to be more of us looking for targeted guidance. So, even as I continue my own journey as a student and budding coach, I created Southpaw Space to share everything I learn—so you don’t have to hunt for those hidden gems.
        </p>

        <h2>Our Mission & Vision</h2>
        <ul>
          <li><strong>Mission:</strong> Empower fighters—southpaw and orthodox alike—with practical drills, strategic breakdowns, and gear reviews that leverage the unique angles and timing of a left-handed stance.</li>
          <li><strong>Vision:</strong> Build a hub where left-handers and orthodox fighters alike can sharpen their skills, swap insights, and push the art of fighting forward.</li>
        </ul>

        <h2>Who’s Behind the Gloves</h2>
        <p>
          I’m the founder of Southpaw Space—a dedicated mixed martial arts student who’s trained and competed across disciplines, from the boxing ring to the karate dojo and the kickboxing cage. Today, I also coach, helping fighters translate southpaw strategies into real-world results.
        </p>

        <h2>Why Southpaw Space?</h2>
        <ul>
          <li><strong>Southpaw-First Content:</strong> Every technique is designed around left-handed angles and counters.</li>
          <li><strong>Cross-Discipline Approach:</strong> Techniques and drills that work in boxing, kickboxing, MMA, and more.</li>
        </ul>

        <h2>Join the Movement</h2>
        <p>
          Ready to level up your southpaw game (or finally understand how to beat one)?
        </p>
        <Link href="/subscribe">
          <a className="inline-block bg-blue-600 text-white font-semibold rounded-lg px-6 py-3 hover:bg-blue-700 transition">
            Subscribe Now
          </a>
        </Link>
      </main>
    </PageTemplate>
  )
}
