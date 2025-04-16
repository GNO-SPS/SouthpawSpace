import { ReactNode } from "react";
import Link from "next/link";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans">
      <header className="w-full border-b border-zinc-800 py-4 px-6 flex justify-between items-center">
      <Link href="/" className="flex items-center">
        <img src="/logo.png" alt="Southpaw Space Logo" className="h-16 w-[190px]" />
      </Link>
        <nav className="space-x-6 text-sm text-zinc-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/guides" className="hover:text-white">Guides</Link>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <Link href="/about" className="hover:text-white">About</Link>
        </nav>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-12">
        {children}
      </section>

      <footer className="text-center text-sm text-zinc-600 border-t border-zinc-800 py-6 mt-20">
        © {new Date().getFullYear()} Southpaw Space. Built for southpaws, by a southpaw.
      </footer>
    </main>
  );
}