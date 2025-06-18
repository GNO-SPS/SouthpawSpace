//\src\app\guides\southpaw-combos\page.tsx
import PageTemplate from "@/components/PageTemplate";

export default function SouthpawCombosPage() {
  return (
    <PageTemplate
      title="Top 5 Southpaw Boxing Combos That Confuse Orthodox Fighters"
      intro="Orthodox fighters hate facing southpaws — and for good reason. The angles are awkward, the timing’s different, and their usual combos don’t land the same. But here’s the secret: they’re confused because you’re not playing their game — and that gives you the edge."
    >
      <p className="text-zinc-400 mb-2">
        In this guide, you’ll learn 5 high-success southpaw combos designed to:
      </p>
      <ul className="text-zinc-400 list-disc list-inside mb-10">
        <li>Disrupt rhythm</li>
        <li>Exploit open angles</li>
        <li>Punish predictable footwork</li>
      </ul>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          🥇 Combo 1: Jab → Straight Left → Right Hook (Head or Body)
        </h2>
        <p className="text-zinc-400">
          Establishes range with the jab, lands the left straight through the centre, ends with a hook that catches them mid-step. <br />
          <em>Pro tip:</em> Dig the hook to the body when they shell up.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          🥈 Combo 2: Double Jab → Step Outside → Straight Left
        </h2>
        <p className="text-zinc-400">
          Jab twice to get them blinking, step your lead foot to the outside of theirs, then throw a laser-straight left. <br />
          <em>Classic angle control combo.</em>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          🥉 Combo 3: Feint Jab → Left Uppercut → Right Hook
        </h2>
        <p className="text-zinc-400">
          Feint draws their guard up. Uppercut comes under. Right hook wraps around. Great for breaking rhythm.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          💥 Combo 4: Right Hook (Lead) → Pivot → Left Straight
        </h2>
        <p className="text-zinc-400">
          Lead hook surprises them. Pivot puts you off their centre line. Left straight lands clean. <br />
          <em>Ideal against aggressive opponents.</em>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          🔥 Combo 5: Cross to the Chest → Lead Uppercut → Left Overhand
        </h2>
        <p className="text-zinc-400">
          Cross drops their eye level. Uppercut shifts their attention to attacks coming from under the guard. Overhand loops over the top.{" "}
          <em>Perfect when they lean forward.</em>
        </p>
      </section>
    </PageTemplate>
  );
}
