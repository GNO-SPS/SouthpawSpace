'use client';

import { useEffect, useState } from "react";

export default function NewsletterForm() {
  const DESKTOP_UID = "f126e7063a";
  const MOBILE_UID = "76aaf8cbd0";

  const [uid, setUid] = useState(() =>
    typeof window !== "undefined" && window.innerWidth <= 640
      ? MOBILE_UID
      : DESKTOP_UID
  );

  useEffect(() => {
    const handleResize = () => {
      const newUid = window.innerWidth <= 640 ? MOBILE_UID : DESKTOP_UID;
      setUid(newUid);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Prevent duplicate injection
    if (document.querySelector(`script[data-uid="${uid}"]`)) return;

    console.log("Injecting ConvertKit form for UID:", uid);

    const script = document.createElement("script");
    script.src = "https://f.convertkit.com/kit.js";
    script.async = true;
    script.setAttribute("data-uid", uid);
    script.setAttribute("data-kit-injected", "true");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [uid]);

return (
  <div className="w-full max-w-xl mx-auto my-10 px-4" data-uid={uid}>
    <div id={`ck-form-container-${uid}`} />
  </div>
);

}
