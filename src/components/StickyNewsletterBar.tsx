// src/components/StickyNewsletterBar.tsx
"use client";

import { useEffect } from "react";

export default function StickyNewsletterBar() {
  useEffect(() => {
    if (document.querySelector(`script[data-uid="26f236d1f6"]`)) return;

    const script = document.createElement("script");
    script.src = "https://southpaw-space.kit.com/26f236d1f6/index.js";
    script.async = true;
    script.setAttribute("data-uid", "26f236d1f6");
    document.body.appendChild(script);
  }, []);

  return null;
}
