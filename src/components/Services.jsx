const services = [
  {
    id: "01",
    title: "Mix",
    tagline: "Full mixing — balance, depth, space.",
    description:
      "I take your stems and build a coherent, powerful mix from scratch. Kick & bass alignment, frequency balance, stereo width, automation — everything that makes a track feel professional and ready.",
    includes: [
      "Stem organisation & gain staging",
      "Full mix with up to 2 revisions",
      "Club-optimised low end",
      "Delivered in WAV 24-bit",
    ],
  },
  {
    id: "02",
    title: "Master",
    tagline: "Final polish. Streaming & club ready.",
    description:
      "Mastering that makes your track loud, clear, and competitive — without squashing what makes it good. LUFS targeting for Spotify, Apple Music, and DJ sets.",
    includes: [
      "Stereo mastering from mixed file",
      "LUFS targeting (streaming + club)",
      "Up to 2 revisions",
      "Delivered WAV + MP3 320kbps",
    ],
  },
  {
    id: "03",
    title: "Stem Mastering",
    tagline: "More control. Better results.",
    description:
      "You send grouped stems (drums, bass, synths, FX) and I master with greater dynamic control than a standard stereo master. Ideal for complex arrangements that need surgical attention.",
    includes: [
      "Up to 8 stem groups",
      "Individual stem processing",
      "Final stereo master",
      "Up to 2 revisions",
    ],
  },
  {
    id: "04",
    title: "Track Feedback",
    tagline: "Honest ears. Actionable notes.",
    description:
      "You send me your track — finished, unfinished, WIP — and I give you a detailed written breakdown of what's working, what isn't, and exactly what I'd change. No fluff, no vague compliments.",
    includes: [
      "Detailed written feedback (400–600 words)",
      "Specific mix/arrangement notes",
      "Frequency & dynamics analysis",
      "Delivered within 48h",
    ],
  },
  {
    id: "05",
    title: "Co-Production",
    tagline: "Build something together.",
    description:
      "Collaborative production — you bring an idea, a loop, a concept, or a half-finished project and we develop it together. Remote sessions via file exchange or live call.",
    includes: [
      "Track development from idea to finish",
      "Sound design & arrangement",
      "Mix-ready delivery",
      "Flexible scope — discuss first",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-koda-dark">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="section-label mb-4">Services</p>
          <h2 className="section-title">
            What I offer
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.id} className="card group flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-xs text-koda-muted">{s.id}</span>
                <span className="font-mono text-xs text-koda-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </div>

              <h3 className="font-mono text-xl font-bold text-koda-white mb-1">
                {s.title}
              </h3>
              <p className="font-mono text-xs text-koda-accent tracking-wide mb-4">
                {s.tagline}
              </p>

              <p className="text-koda-text text-sm leading-relaxed mb-6 flex-1">
                {s.description}
              </p>

              <ul className="space-y-1.5 border-t border-koda-border pt-4">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-koda-muted">
                    <span className="text-koda-accent mt-0.5 shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA card */}
          <div className="card border-koda-accent/30 bg-koda-accent/5 flex flex-col justify-center items-center text-center p-8">
            <p className="font-mono text-koda-accent text-xs tracking-widest uppercase mb-4">
              Not sure what you need?
            </p>
            <p className="text-koda-text text-sm mb-6">
              Send me a message and I&apos;ll tell you exactly what your track needs.
            </p>
            <a href="#contact" className="btn-outline text-xs py-3 px-6">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
