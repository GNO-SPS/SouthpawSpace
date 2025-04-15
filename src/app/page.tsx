export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Southpaw Space</h1>
        <p className="text-lg mb-6">
          The ultimate resource hub for southpaw fighters. Strategy breakdowns, drills,
          gear reviews, and tactical guides designed for left-handed warriors.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Featured Guides</h2>
          <ul className="space-y-3">
            <li className="bg-gray-900 p-4 rounded-xl shadow">
              <h3 className="text-xl font-medium">Top 5 Southpaw Boxing Combos</h3>
              <p className="text-sm text-gray-400">
                Confuse orthodox fighters with these tested combinations.
              </p>
            </li>
            <li className="bg-gray-900 p-4 rounded-xl shadow">
              <h3 className="text-xl font-medium">Footwork Fundamentals for Southpaws</h3>
              <p className="text-sm text-gray-400">
                Drills to dominate the centre line and control angles.
              </p>
            </li>
            <li className="bg-gray-900 p-4 rounded-xl shadow">
              <h3 className="text-xl font-medium">How to Fight Orthodox Fighters</h3>
              <p className="text-sm text-gray-400">
                Strategy blueprint for sparring and competition.
              </p>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Latest Articles</h2>
          <p className="text-gray-400">
            Coming soon: breakdowns, fight IQ boosters, and southpaw-specific tips updated weekly.
          </p>
        </section>

        <footer className="text-center text-sm text-gray-600 mt-16">
          © {new Date().getFullYear()} Southpaw Space. Built for southpaws, by a southpaw.
        </footer>
      </div>
    </main>
  );
}
