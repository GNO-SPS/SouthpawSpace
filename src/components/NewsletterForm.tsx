// src/components/NewsletterForm.tsx
"use client";

import { useEffect, useRef } from "react";

export default function NewsletterForm() {
  const uid = "4482a7b1c7";
  const scriptUrl = `https://southpaw-space.kit.com/${uid}/index.js`;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.setAttribute("data-uid", uid);
    container.appendChild(script);

    return () => {
      if (container.contains(script)) {
        container.removeChild(script);
      }
      container.innerHTML = "";
    };
  }, [scriptUrl, uid]);

  return (
    <div
      ref={ref}
      data-uid={uid}
      className="w-full max-w-xl mx-auto my-10 px-4"
    />
  );
}
