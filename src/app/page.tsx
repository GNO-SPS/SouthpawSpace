import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans">
      <header className="w-full border-b border-zinc-800 py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Southpaw Space</h1>
        <nav className="space-x-6 text-sm text-zinc-400">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Guides</a>
          <a href="#" className="hover:text-white">Blog</a>
          <a href="#" className="hover:text-white">About</a>
        </nav>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-extrabold mb-4">Built for Southpaws</h2>
        <p className="text-lg text-zinc-400 mb-10">
          Strategy breakdowns, drills, gear reviews, and tactical guides designed for left-handed warriors.
        </p>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Featured Guides</h3>
          <div className="space-y-4">
            {[
              {
                title: "Top 5 Southpaw Boxing Combos",
                desc: "Confuse orthodox fighters with these tested combinations.",
              },
              {
                title: "Footwork Fundamentals for Southpaws",
                desc: "Drills to dominate the centre line and control angles.",
              },
              {
                title: "How to Fight Orthodox Fighters",
                desc: "Strategy blueprint for sparring and competition.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-zinc-900 p-5 rounded-2xl hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-zinc-400">{item.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-600 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Latest Articles</h3>
          <p className="text-zinc-400 text-sm">
            Coming soon: breakdowns, fight IQ boosters, and southpaw-specific tips updated weekly.
          </p>
        </div>
      </section>

      <footer className="text-center text-sm text-zinc-600 border-t border-zinc-800 py-6 mt-20">
        © {new Date().getFullYear()} Southpaw Space. Built for southpaws, by a southpaw.
      </footer>
    </main>
  );
}
