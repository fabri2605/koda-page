import photo11 from "../assets/PRESKIT KODA11.jpg";

const stats = [
  { value: "10+", label: "Years producing" },
  { value: "100+", label: "Tracks mixed" },
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
                I&apos;m KODA — an Argentine techno/electronic producer and DJ.
                I&apos;ve been building
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
                href="https://soundcloud.com/indikodaa"
                target="_blank"
                rel="noopener noreferrer"
                className="section-label hover:text-koda-accent transition-colors"
              >
                SoundCloud ↗
              </a>
              <span className="text-koda-border">|</span>
              <a
                href="https://www.instagram.com/koda_ar_/"
                target="_blank"
                rel="noopener noreferrer"
                className="section-label hover:text-koda-accent transition-colors"
              >
                Instagram ↗
              </a>
            </div>
          </div>

          {/* Right: photo + stats */}
          <div className="space-y-4">
            {/* Portrait */}
            <div className="overflow-hidden border border-koda-border">
              <img
                src={photo11}
                alt="KODA"
                className="w-full object-cover"
                style={{ maxHeight: "520px", objectPosition: "center 18%" }}
              />
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
