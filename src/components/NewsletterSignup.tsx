"use client";

import { useEffect, useRef } from "react";

export default function NewsletterSignup() {
  const uid = "4482a7b1c7";
  const src = `https://southpaw-space.kit.com/${uid}/index.js`;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create and append the script inside our container
    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    script.setAttribute("data-uid", uid);
    containerRef.current.appendChild(script);

    return () => {
      // Clean up on unmount
      containerRef.current?.removeChild(script);
      // And clear any Kit-injected children (the form itself)
      containerRef.current!.innerHTML = "";
    };
  }, [src, uid]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-xl mx-auto my-10 px-4"
      data-uid={uid}
    />
  );
}
