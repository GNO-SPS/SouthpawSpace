"use client";

import { useEffect } from "react";

export default function NewsletterSlideIn() {
  useEffect(() => {
    // Prevent duplicate script injection
    if (document.querySelector(`script[data-uid="76aaf8cbd0"]`)) return;

    const script = document.createElement("script");
    script.src = "https://southpaw-space.kit.com/76aaf8cbd0/index.js";
    script.async = true;
    script.setAttribute("data-uid", "76aaf8cbd0");
    document.body.appendChild(script);

    return () => {
      try {
        document.body.removeChild(script);
      } catch (e) {
        // Silent fail if script was already removed
      }
    };
  }, []);

  return null;
}

