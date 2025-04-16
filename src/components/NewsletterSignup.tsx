'use client';

export default function NewsletterSignup() {
  return (
    <div className="mt-16 bg-zinc-900 p-6 rounded-2xl">
      <h3 className="text-xl font-semibold mb-2">📬 Get More Southpaw Tactics</h3>
      <p className="text-zinc-400 mb-4">
        Join the newsletter for exclusive southpaw sparring tips, drills, and gear guides.
      </p>
      <form className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg bg-zinc-800 text-white placeholder-white"
        />
        <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-zinc-200">
          Subscribe
        </button>
      </form>
    </div>
  );
}
