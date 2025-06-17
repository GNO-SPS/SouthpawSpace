"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NewsletterSlideIn() {
  const pathname = usePathname();
  const uid = "76aaf8cbd0";

  useEffect(() => {
    // Inject only on guide pages
    if (!pathname.startsWith("/guides")) return;

    const scriptId = `kit-script-${uid}`;
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = `https://southpaw-space.kit.com/${uid}/index.js`;
      script.async = true;
      script.setAttribute("data-uid", uid);
      script.id = scriptId;
      document.body.appendChild(script);
    }

    return () => {
      // Remove Kit UI and script
      document.querySelectorAll(`[data-kit-widget-id^="${uid}"]`).forEach((el) => el.remove());
      const existingScript = document.getElementById(scriptId);
      if (existingScript) existingScript.remove();
    };
  }, [pathname]);

  return null;
}
