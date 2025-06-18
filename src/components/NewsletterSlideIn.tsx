"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function NewsletterSlideIn() {
  const pathname = usePathname();
  const uid = "76aaf8cbd0";
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pathname.startsWith("/guides")) return;

    const scriptId = `kit-script-${uid}`;

    // Remove existing form (in case of re-navigation)
    document.querySelectorAll(`[data-kit-widget-id^="${uid}"]`).forEach((el) => el.remove());
    const existingScript = document.getElementById(scriptId);
    if (existingScript) existingScript.remove();

    // Inject into the containerRef
    if (containerRef.current && !document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = `https://southpaw-space.kit.com/${uid}/index.js`;
      script.async = true;
      script.setAttribute("data-uid", uid);
      script.id = scriptId;

      containerRef.current.appendChild(script);
    }

    return () => {
      document.querySelectorAll(`[data-kit-widget-id^="${uid}"]`).forEach((el) => el.remove());
      const existingScript = document.getElementById(scriptId);
      if (existingScript) existingScript.remove();
    };
  }, [pathname]);

  return (
    <div className="fixed bottom-0 right-0 z-50 p-6 pt-24" ref={containerRef}></div>
  );
}
