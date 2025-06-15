// src/components/Layout.tsx
import { ReactNode } from "react";
import Link from "next/link"
import Image from "next/image"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans">
      <header className="w-full border-b border-zinc-800 py-4 px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Southpaw Space Logo"
            width={190}
            height={64}
            priority
            className="h-16 w-[190px]"
          />
        </Link>
        <nav className="space-x-6 text-sm text-zinc-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/guides" className="hover:text-white">Guides</Link>
          {/* <Link href="/blog" className="hover:text-white">Blog</Link> */}
          <Link href="/about" className="hover:text-white">About</Link>
        </nav>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-12">
        {children}
      </section>

      <footer className="text-center text-sm text-zinc-600 border-t border-zinc-800 py-6 mt-20">
        © {new Date().getFullYear()} Southpaw Space. Built for southpaws, by a southpaw.
      </footer>

      {/* ConvertKit Slide-In Newsletter Form */}
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
    </main>
  )
}