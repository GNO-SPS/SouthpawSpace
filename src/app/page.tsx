//src/app/page.tsx

import PageTemplate from "@/components/PageTemplate";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <PageTemplate
      title="Built for Southpaws"
      intro="Strategy breakdowns, drills, gear reviews, and tactical guides designed for left-handed warriors."
    >
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4">Featured Guides</h3>
        <div className="space-y-4">
          <Link href="/guides/southpaw-combos">
            <div className="bg-zinc-900 p-5 rounded-2xl hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold mb-1">
                    Top 5 Southpaw Boxing Combos
                  </h4>
                  <p className="text-sm text-zinc-400">
                    Confuse orthodox fighters with these tested combinations.
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600 mt-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Latest Articles</h3>
        <p className="text-zinc-400 text-sm">
          Coming soon: breakdowns, fight IQ boosters, and southpaw-specific tips
          updated weekly.
        </p>
      </div>
    </PageTemplate>
  );
}
