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

  // Inject the Kit script only once
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Determine initial UID based on window width
    const initialUid =
      typeof window !== "undefined" && window.innerWidth <= 640
        ? MOBILE_UID
        : DESKTOP_UID;

    const script = document.createElement("script");
    script.src = `https://southpaw-space.kit.com/${initialUid}/index.js`;
    script.async = true;
    script.setAttribute("data-uid", initialUid); // It's good practice to set the data-uid on script too
    container.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      if (container.contains(script)) {
        container.removeChild(script);
      }
      // No need to clear innerHTML if we only remove the script
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div
      ref={containerRef}
      data-uid={uid}
      className="w-full max-w-xl mx-auto my-10 px-4"
    />
  );
}
