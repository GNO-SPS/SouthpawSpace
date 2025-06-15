// src/components/PageTemplate.tsx

import Layout from "@/components/Layout";
import { ReactNode } from "react";
import NewsletterEmbed from "@/components/NewsletterEmbed"; 

type PageTemplateProps = {
  title?: string;
  intro?: string;
  children: ReactNode;
  showNewsletter?: boolean;
};

export default function PageTemplate({
  title,
  intro,
  children,
  showNewsletter = true,
}: PageTemplateProps) {
  return (
    <Layout>
      <section
        className="max-w-3xl mx-auto py-16 px-4 space-y-10"
        aria-labelledby={title ? "page-heading" : undefined}
      >
        {title && (
          <h1 id="page-heading" className="text-4xl font-bold mb-6">
            {title}
          </h1>
        )}
        {intro && <p className="text-zinc-400 text-lg mb-8">{intro}</p>}

        {children}

        {showNewsletter && (
  <div className="mt-16 flex justify-center portrait-scale">
    <NewsletterEmbed />
  </div>
)}

      </section>
    </Layout>
  );
}
