// src/components/NewsletterForm.tsx
"use client";

import { useEffect, useRef } from "react";

export default function NewsletterForm() {
  const uid = "f126e7063a"; // only once
  const scriptUrl = `https://southpaw-space.kit.com/${uid}/index.js`;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const kitScript = document.createElement("script");
    kitScript.src = scriptUrl;
    kitScript.async = true;
    kitScript.setAttribute("data-uid", uid);
    container.appendChild(kitScript);

    return () => {
      if (container.contains(kitScript)) {
        container.removeChild(kitScript);
      }
      container.innerHTML = "";
    };
  }, [scriptUrl, uid]);

  return (
    <div
      ref={containerRef}
      data-uid={uid}
      className="w-full max-w-xl mx-auto my-10 px-4"
    />
  );
}

