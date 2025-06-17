"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function StickyNewsletterBar() {
  const pathname = usePathname();
  const uid = "26f236d1f6";

  useEffect(() => {
    const scriptId = `kit-script-${uid}`;
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = `https://southpaw-space.kit.com/${uid}/index.js`;
      script.async = true;
      script.setAttribute("data-uid", uid);
      script.id = scriptId;
      document.body.appendChild(script);
    }

    return () => {
      document.querySelectorAll(`[data-kit-widget-id^="${uid}"]`).forEach((el) => el.remove());
      const injectedScript = document.getElementById(scriptId);
      if (injectedScript) injectedScript.remove();
    };
  }, [pathname]);

  return null;
}

