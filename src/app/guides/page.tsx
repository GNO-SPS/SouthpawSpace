import PageTemplate from "@/components/PageTemplate";
import Link from "next/link";
import { getAllGuideMeta } from "@/lib/guides-meta";

export const metadata = {
  title: "Southpaw Guides",
  description: "In-depth tactical guides to help southpaw fighters improve their skills and strategy.",
};

export default function GuidesPage() {
  const guides = getAllGuideMeta();

  return (
    <PageTemplate
      title="Southpaw Guides"
      intro="In-depth tactical guides to help southpaw fighters improve their skills and strategy."
      showNewsletter={false}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="block bg-zinc-900 p-5 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            <h3 className="text-xl font-semibold mb-1">{guide.title}</h3>
            <p className="text-zinc-400 text-sm">{guide.description}</p>
          </Link>
        ))}
      </div>
    </PageTemplate>
  );
}
