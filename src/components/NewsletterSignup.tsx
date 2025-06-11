"use client";

import Script from "next/script";

export default function NewsletterSignup() {
  const uid = "4482a7b1c7";
  const src = `https://southpaw-space.kit.com/${uid}/index.js`;

  return (
    <div className="w-full max-w-xl mx-auto my-10 px-4">
      {/* This is where Kit will mount the form */}
      <div data-uid={uid} />
      
      {/* Load the Kit embed script only when this component is rendered */}
      <Script
        src={src}
        data-uid={uid}
        strategy="afterInteractive"
        onError={(e) => console.error("Kit embed failed", e)}
      />
    </div>
  );
}

