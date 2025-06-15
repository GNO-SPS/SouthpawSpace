'use client';

import { useEffect, useRef, useState } from "react";

export default function NewsletterForm() {
  const DESKTOP_UID = "f126e7063a";
  const MOBILE_UID = "76aaf8cbd0";

  const [uid, setUid] = useState(() =>
    typeof window !== "undefined" && window.innerWidth <= 640
      ? MOBILE_UID
      : DESKTOP_UID
  );

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const newUid = window.innerWidth <= 640 ? MOBILE_UID : DESKTOP_UID;
      setUid(newUid);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (document.querySelector(`script[data-uid="${uid}"]`)) return;

    const existingScripts = container.querySelectorAll('script[src*="kit.com"]');
    existingScripts.forEach((s) => container.removeChild(s));

    const script = document.createElement("script");
    script.src = `https://southpaw-space.kit.com/${uid}/index.js`;
    script.async = true;
    script.setAttribute("data-uid", uid);
    container.appendChild(script);

    return () => {
      if (container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, [uid]);

  return (
    <div
      ref={containerRef}
      data-uid={uid}
      className="w-full max-w-xl mx-auto my-10 px-4"
    >
      <div id={`ck-form-container-${uid}`} />
    </div>
  );
}
