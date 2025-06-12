// src/components/PageTemplate.tsx

import Layout from "@/components/Layout";
import NewsletterSignup from "@/components/NewsletterSignup";
import { ReactNode } from "react";

type PageTemplateProps = {
  title?: string;
  intro?: string;
  children: ReactNode;
  showNewsletter?: boolean;     // ← keep this prop
};

export default function PageTemplate({
  title,
  intro,
  children,
  showNewsletter = true,       // ← default to true
}: PageTemplateProps) {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-16 px-4 space-y-10">
        {title && <h1 className="text-4xl font-bold mb-6">{title}</h1>}
        {intro && <p className="text-zinc-400 text-lg mb-8">{intro}</p>}
        {children}
        {showNewsletter && <NewsletterSignup />}  {/* ← conditional render */}
      </div>
    </Layout>
  );
}
