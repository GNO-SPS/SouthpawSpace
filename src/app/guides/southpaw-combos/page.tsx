import Link from "next/link";

export default function SouthpawCombosPage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-3xl mx-auto">
      {/* Header */}
      <header className="flex items-center justify-between mb-12">
        <Link href="/">
          <div className="flex items-center space-x-2">
            {/* Logo placeholder - insert logo image later if needed */}
            <span className="text-2xl font-bold text-white">Southpaw Space</span>
          </div>
        </Link>
        <nav className="space-x-4 text-zinc-300 text-sm">
          <Link href="/">Home</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <h1 className="text-4xl font-bold mb-4">Top 5 Southpaw Boxing Combos That Confuse Orthodox Fighters</h1>

      <p className="text-zinc-400 mb-6">
        Orthodox fighters hate facing southpaws — and for good reason. The angles are awkward, the timing’s different, and their usual combos don’t land the same. But here’s the secret: <strong>they’re confused because you’re not playing their game</strong> — and that gives you the edge.
      </p>

      <p className="text-zinc-400 mb-2">
        In this guide, you’ll learn 5 high-success southpaw combos designed to:
      </p>
      <ul className="text-zinc-400 list-disc list-inside mb-10">
        <li>Disrupt rhythm</li>
        <li>Exploit open angles</li>
        <li>Punish predictable footwork</li>
      </ul>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-2">🥇 Combo 1: Jab → Straight Left → Right Hook (Head or Body)</h2>
          <p className="text-zinc-400">
            Establishes range with the jab, lands the left straight through the centre, ends with a hook that catches them mid-step. <br/>
            <em>Pro tip:</em> Dig the hook to the body when they shell up.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">🥈 Combo 2: Double Jab → Step Outside → Straight Left</h2>
          <p className="text-zinc-400">
            Jab twice to get them blinking, step your lead foot to the outside of theirs, then throw a laser-straight left. <br/>
            <em>Classic angle control combo.</em>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">🥉 Combo 3: Feint Jab → Left Uppercut → Right Hook</h2>
          <p className="text-zinc-400">
            Feint draws their guard up. Uppercut comes under. Right hook wraps around. Great for breaking rhythm.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">💥 Combo 4: Right Hook (Lead) → Pivot → Left Straight</h2>
          <p className="text-zinc-400">
            Lead hook surprises them. Pivot puts you off their centre line. Left straight lands clean. <br/>
            <em>Ideal against aggressive opponents.</em>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">🔥 Combo 5: Jab to the Chest → Rear Uppercut → Left Overhand</h2>
          <p className="text-zinc-400">
            Jab drops their eye level. Uppercut distracts inside. Overhand loops over the top.
            <em>Perfect when they lean forward.</em>
          </p>
        </section>
      </div>

      <div className="mt-16 bg-zinc-900 rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-2">🎯 Get More Southpaw Tactics</h3>
        <p className="text-zinc-400 mb-4">
          Join the newsletter for exclusive southpaw sparring tips, drills, and gear guides — no spam.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg text-black"
          />
          <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-zinc-200">
            Subscribe
          </button>
        </form>
      </div>
    </main>
  );
}
