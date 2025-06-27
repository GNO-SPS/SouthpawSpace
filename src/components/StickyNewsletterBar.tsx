"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function StickyNewsletterBar() {
  const pathname = usePathname();
  const uid = process.env.NEXT_PUBLIC_STICKY_UID || "26f236d1f6";

  useEffect(() => {
    // Inject only on /about
    if (pathname !== "/about" || !uid) return;

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
  }, [pathname, uid]);

  return null;
}
