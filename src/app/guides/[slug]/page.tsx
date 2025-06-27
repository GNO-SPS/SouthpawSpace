import PageTemplate from "@/components/PageTemplate";
import { getGuideMeta } from "@/lib/guides-meta";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getGuideMeta(slug);

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [meta.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [meta.ogImage],
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getGuideMeta(slug);

  return (
    <PageTemplate title={meta.title} intro={meta.description} showNewsletter={true}>
      <article className="prose max-w-none">
        <h1>{meta.title}</h1>
        <p className="text-lg text-gray-700">{meta.description}</p>
        {/* TODO: Replace the following with your real guide content */}
        <section className="mt-8">
          <p>
            This is where the full content for <strong>{meta.title}</strong> will go.
            Use MDX or JSX here to lay out drills, tactics, images, etc.
          </p>
        </section>
      </article>
    </PageTemplate>
  );
}
