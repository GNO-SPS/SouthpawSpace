// src/app/guides/[slug]/layout.tsx

import PageTemplate from "@/components/PageTemplate";
import { ReactNode } from "react";

type GuideDetailLayoutProps = {
  children: ReactNode;
};

export default function GuideDetailLayout({ children }: GuideDetailLayoutProps) {
  return (
    // Newsletter will be shown on every guide detail page
    <PageTemplate showNewsletter={true}>
      {children}
    </PageTemplate>
  );
}
