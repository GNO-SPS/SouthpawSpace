// src/app/guides/page.tsx

import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";

export default function GuidesPage() {
  return (
    <PageTemplate
      title="Southpaw Guides"
      intro="In-depth tactical guides to help southpaw fighters improve their skills and strategy."
      showNewsletter={false}  // ← Disabled newsletter here
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/guides/southpaw-combos"
          className="block bg-zinc-900 p-5 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all"
        >
          <h3 className="text-xl font-semibold mb-1">
            🥊 Top 5 Southpaw Boxing Combos
          </h3>
          <p className="text-zinc-400 text-sm">
            Confuse orthodox fighters with these tested combinations.
          </p>
        </Link>
        {/* Add more guide links here as needed */}
      </div>
    </PageTemplate>
  );
}