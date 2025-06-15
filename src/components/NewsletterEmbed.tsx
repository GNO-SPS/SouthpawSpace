// src/components/NewsletterEmbed.tsx
"use client";

import { useEffect } from "react";

export default function NewsletterEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://f.convertkit.com/ckjs/ck.5.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <!-- Begin ConvertKit Form embed -->
          <form action="https://app.kit.com/forms/8179075/subscriptions"
            class="seva-form formkit-form"
            method="post"
            data-sv-form="8179075"
            data-uid="76aaf8cbd0"
            data-format="inline"
            data-version="5"
            data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription."},"analytics":{},"modal":{},"powered_by":{"show":true},"recaptcha":{"enabled":false},"return_visitor":{"action":"show"},"slide_in":{},"sticky_bar":{}}}'
            min-width="400 500 600 700 800"
            style="background-color: black; border-radius: 12px;"
          >
            <!-- Your full embed HTML goes here, exactly as provided by Kit -->
          </form>
          <!-- End ConvertKit Form embed -->
        `,
      }}
    />
  );
}
