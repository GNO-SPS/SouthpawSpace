"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function NewsletterSlideIn() {
  const pathname = usePathname();
  const uid = "76aaf8cbd0";
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pathname.startsWith("/guides")) return;

    const scriptId = `kit-script-${uid}`;
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = `https://southpaw-space.kit.com/${uid}/index.js`;
      script.async = true;
      script.setAttribute("data-uid", uid);
      script.id = scriptId;

      wrapperRef.current?.appendChild(script);
    }

    return () => {
      document.querySelectorAll(`[data-kit-widget-id^="${uid}"]`).forEach((el) => el.remove());
      const existingScript = document.getElementById(scriptId);
      if (existingScript) existingScript.remove();
    };
  }, [pathname]);

  if (!pathname.startsWith("/guides")) return null;

  return (
    <div className="fixed top-[5vh] left-0 right-0 z-50 flex justify-center px-4">
      <div
        ref={wrapperRef}
        className="min-w-[480px] max-w-[95vw] max-h-[90vh] overflow-y-auto"
      />
    </div>
  );
}
