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
  const injectedRef = useRef(false);  // ← tracks injection

  // Update UID on resize, but don’t retrigger injection
  useEffect(() => {
    const onResize = () => {
      const isMobile = window.innerWidth <= 640;
      setUid(isMobile ? MOBILE_UID : DESKTOP_UID);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Inject the kit script only once
  useEffect(() => {
    if (injectedRef.current) return;    // ← skip if already injected
    const container = containerRef.current;
    if (!container) return;

    // inject
    const script = document.createElement("script");
    script.src = `https://southpaw-space.kit.com/${uid}/index.js`;
    script.async = true;
    script.setAttribute("data-uid", uid);
    container.appendChild(script);

    injectedRef.current = true;         // ← mark as injected

    // optional cleanup on full unmount
    return () => {
      if (container.contains(script)) {
        container.removeChild(script);
      }
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
