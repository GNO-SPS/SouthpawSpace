import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 prose lg:prose-xl">
      <h1>About Southpaw Space</h1>

      <p>
        <strong>Southpaw Space</strong> was born out of one simple frustration: as a left-handed fighter, I found almost no high-quality, southpaw-specific training resources online. After years competing in boxing, kickboxing, and earning my black belt in karate, I realised that most tutorials, drills and combos are built for orthodox fighters—and recycled endless “mirrored” advice that never quite worked for me.
      </p>

      <p>
        Through the generosity of a few southpaw coaches, I picked up techniques and insights I couldn’t find anywhere else. I knew there had to be more of us out there looking for targeted guidance. So, even as I continue my own journey as a student and budding coach, I created Southpaw Space to share everything I learn—so you don’t have to hunt for those hidden gems.
      </p>

      <h2>Mission &amp; Vision</h2>
      <ul>
        <li><strong>Mission:</strong> To empower southpaw—and all—fighters with tactics, combos, drills and gear advice tailored to the unique angles, timing and geometry of southpaw stance.</li>
        <li><strong>Vision:</strong> Build a hub where left-handers and orthodox fighters alike can sharpen their skills, swap insights, and push the art of fighting forward.</li>
      </ul>

      <h2>Who’s Behind the Gloves</h2>
      <p>
        I’m the founder of Southpaw Space—a student of mixed martial arts who’s spent years competing in combat sports. From the ring of amateur boxing to the mats of karate and the cage of kickboxing, I’m always learning. Today, I also take on coaching roles, helping fighters translate southpaw strategies into real-world results.
      </p>

      <h2>Why Southpaw Space?</h2>
      <ul>
        <li><strong>Southpaw-First Content:</strong> Every drill, every tip, every combo is designed around left-handed angles and counters.</li>
        <li><strong>Cross-Discipline Approach:</strong> Boxing, kickboxing, MMA and more—everything here applies whether you’re throwing punches, kicks or takedowns.</li>
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
  );
}
