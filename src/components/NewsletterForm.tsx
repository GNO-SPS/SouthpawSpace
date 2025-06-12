// src/components/NewsletterForm.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function NewsletterForm() {
  // Your two Kit form UIDs
  const DESKTOP_UID = "f126e7063a";   // existing slide-in UID
  const MOBILE_UID  = "76aaf8cbd0";   // your new mobile UID

  // Determine which to use based on screen width
  const [uid, setUid] = useState(() =>
    typeof window !== "undefined" && window.innerWidth <= 640
      ? MOBILE_UID
      : DESKTOP_UID
  );

  const containerRef = useRef<HTMLDivElement>(null);

  // Update UID on resize
  useEffect(() => {
    const onResize = () => {
      const isMobile = window.innerWidth <= 640;
      setUid(isMobile ? MOBILE_UID : DESKTOP_UID);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Inject the correct Kit script whenever UID changes
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any previous embed
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = `https://southpaw-space.kit.com/${uid}/index.js`;
    script.async = true;
    script.setAttribute("data-uid", uid);
    container.appendChild(script);

    return () => {
      if (container.contains(script)) container.removeChild(script);
      container.innerHTML = "";
    };
  }, [uid]);

  return (
    <div
      ref={containerRef}
      data-uid={uid}
      className="w-full max-w-xl mx-auto my-10 px-4"
    />
  );
}
