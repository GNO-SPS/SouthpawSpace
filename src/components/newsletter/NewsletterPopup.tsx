// src/components/newsletter/NewsletterPopup.tsx

"use client"

import { useEffect } from "react"

export default function NewsletterPopup() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://f.convertkit.com/ckjs/ck.5.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <form 
            action="https://app.kit.com/forms/8179075/subscriptions"
            class="seva-form formkit-form"
            method="post"
            data-sv-form="8179075"
            data-uid="76aaf8cbd0"
            data-format="slide in"
            data-version="5"
            data-options='{
              "settings":{
                "after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription."},
                "slide_in":{"display_in":"bottom_right","trigger":"scroll","scroll_percentage":"30","timer":5,"devices":"all","show_once_every":0},
                "powered_by":{"show":true}
              },
              "version":"5"
            }'
            min-width="400 500 600 700 800"
            style="background-color: rgb(0, 0, 0); border-radius: 12px;"
          ></form>
        `,
      }}
    />
  )
}
