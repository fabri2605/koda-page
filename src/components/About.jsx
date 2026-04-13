const stats = [
  { value: "8+", label: "Years producing" },
  { value: "100+", label: "Tracks mixed" },
  { value: "2", label: "Continents" },
  { value: "∞", label: "BPM obsession" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="section-label mb-4">About</p>
            <h2 className="section-title mb-6">
              Not just an engineer.
              <br />
              <span className="text-koda-accent">A producer.</span>
            </h2>

            <div className="space-y-4 text-koda-text leading-relaxed">
              <p>
                I&apos;m KODA — an Argentine techno/electronic producer and DJ
                currently based in Melbourne, Australia. I&apos;ve been building
                music that lives in the low end since day one: heavy kicks,
                hypnotic grooves, and that specific pressure that only works
                when everything is perfectly aligned.
              </p>
              <p>
                When I mix and master your tracks, I&apos;m not running a
                template. I listen. I understand what you&apos;re trying to
                say, and I make sure your music hits the way it&apos;s supposed
                to — whether that&apos;s on a club system, a streaming platform,
                or a label release.
              </p>
              <p>
                This isn&apos;t generic audio engineering. It&apos;s a
                perspective shaped by thousands of hours producing, playing
                out, and obsessing over the details that most people miss.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://soundcloud.com"
                target="_blank"
                rel="noopener noreferrer"
                className="section-label hover:text-koda-accent transition-colors"
              >
                SoundCloud ↗
              </a>
              <span className="text-koda-border">|</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="section-label hover:text-koda-accent transition-colors"
              >
                Instagram ↗
              </a>
            </div>
          </div>

          {/* Right: stats + accent block */}
          <div className="space-y-4">
            {/* Decorative block */}
            <div className="border border-koda-accent/20 bg-koda-accent/5 p-8 mb-6">
              <p className="font-mono text-koda-accent text-xs tracking-widest uppercase mb-3">
                What this means for you
              </p>
              <ul className="space-y-2 text-koda-text text-sm">
                {[
                  "Club-tested low end — kick & bass that translates on any system",
                  "Fast turnaround — no endless back-and-forth",
                  "Honest feedback — I tell you what works and what doesn't",
                  "Genre fluency — techno, house, electronica, experimental",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-koda-accent mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="card text-center">
                  <div className="font-mono text-3xl font-bold text-koda-accent mb-1">
                    {s.value}
                  </div>
                  <div className="section-label text-[10px]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
