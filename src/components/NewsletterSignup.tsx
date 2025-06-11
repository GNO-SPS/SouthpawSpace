"use client";

import { useEffect } from "react";

export default function NewsletterSignup() {
  useEffect(() => {
    const existingScript = document.querySelector("script[data-uid='4482a7b1c7']");
    if (!existingScript) {
      const script = document.createElement("script");
      script.async = true;
      script.setAttribute("data-uid", "4482a7b1c7");
      script.src = "https://southpaw-space.kit.com/4482a7b1c7/index.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto my-10 px-4">
      <div data-uid="4482a7b1c7"></div>
    </div>
  );
}
