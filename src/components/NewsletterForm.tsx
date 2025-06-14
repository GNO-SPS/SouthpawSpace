// src/components/NewsletterForm.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function NewsletterForm() {
  const DESKTOP_UID = "f126e7063a";
  const MOBILE_UID  = "76aaf8cbd0";

  const [uid, setUid] = useState(() =>
    typeof window !== "undefined" && window.innerWidth <= 640
      ? MOBILE_UID
      : DESKTOP_UID
  );

  const containerRef = useRef<HTMLDivElement>(null);

  // Update UID on resize, but don’t retrigger injection
  useEffect(() => {
    const onResize = () => {
      const isMobile = window.innerWidth <= 640;
      setUid(isMobile ? MOBILE_UID : DESKTOP_UID);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Inject the Kit script
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Remove any existing Kit scripts from the container
    const existingScripts = container.querySelectorAll('script[src*="southpaw-space.kit.com"]');
    existingScripts.forEach(s => container.removeChild(s));

    // Inject the new script
    const script = document.createElement("script");
    script.src = `https://southpaw-space.kit.com/${uid}/index.js`;
    script.async = true;
    script.setAttribute("data-uid", uid); // Ensure this matches the script's UID
    container.appendChild(script);

    return () => {
      // Cleanup on unmount or before next run if uid changes
      if (container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, [uid]); // Re-run when uid changes

  return (
    <div
      ref={containerRef}
      data-uid={uid}
      className="w-full max-w-xl mx-auto my-10 px-4"
    />
  );
}
