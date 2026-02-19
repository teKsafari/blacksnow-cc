import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="relative min-h-[60dvh] flex items-end pb-16">
        <Image
          src="/001.png"
          alt=""
          fill
          className="object-cover grayscale brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#080808]" />

        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 mb-4">
            // BlackSnow Community
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
            Issues &amp; Feedback
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            This is the public space for BlackSnow — bug reports, feature
            requests, and community discussion.
          </p>
        </div>
      </header>

      {/* Links */}
      <section className="container mx-auto px-6 max-w-4xl py-16 space-y-4">
        <a
          href="https://github.com/teKsafari/blacksnow-cc/issues"
          className="flex items-center justify-between rounded-md border border-white/10 px-6 py-5 text-white/70 hover:border-white/25 hover:text-white transition-all"
        >
          <span className="font-mono text-sm">Open an issue</span>
          <span className="font-mono text-xs text-white/30">github.com/teKsafari/blacksnow-cc →</span>
        </a>
        <a
          href="mailto:hello@blacksnow.cc"
          className="flex items-center justify-between rounded-md border border-white/10 px-6 py-5 text-white/70 hover:border-white/25 hover:text-white transition-all"
        >
          <span className="font-mono text-sm">Get in touch</span>
          <span className="font-mono text-xs text-white/30">hello@blacksnow.cc →</span>
        </a>
        <a
          href="https://blacksnow.cc"
          className="flex items-center justify-between rounded-md border border-white/10 px-6 py-5 text-white/70 hover:border-white/25 hover:text-white transition-all"
        >
          <span className="font-mono text-sm">Main site</span>
          <span className="font-mono text-xs text-white/30">blacksnow.cc →</span>
        </a>
      </section>
    </main>
  );
}
