"use client";

import { useEffect } from "react";

let hasLoadedScript = false;

export default function NewsletterSlideIn() {
  useEffect(() => {
    if (hasLoadedScript || document.querySelector(`script[data-uid="76aaf8cbd0"]`)) return;

    const script = document.createElement("script");
    script.src = "https://southpaw-space.kit.com/76aaf8cbd0/index.js";
    script.async = true;
    script.setAttribute("data-uid", "76aaf8cbd0");
    document.body.appendChild(script);

    hasLoadedScript = true;

    return () => {
      // Do not remove the script on unmount — let it persist across pages
    };
  }, []);

  return null;
}
