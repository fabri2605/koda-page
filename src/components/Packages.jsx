const packages = [
  {
    name: "Single",
    subtitle: "Mix + Master",
    price: "From $120",
    highlight: false,
    description: "Full mix and master for one track. The complete treatment.",
    includes: [
      "Full stereo mix",
      "Master (streaming + club)",
      "Up to 2 revisions per stage",
      "WAV + MP3 delivery",
      "Turnaround: 5–7 days",
    ],
    cta: "Book Single",
  },
  {
    name: "EP Pack",
    subtitle: "Mix + Master — 2 Tracks",
    price: "From $200",
    highlight: true,
    badge: "Most Popular",
    description:
      "The complete EP treatment. Two tracks mixed and mastered with cohesive sound and consistent LUFS across the release.",
    includes: [
      "Full mix for 2 tracks",
      "Mastering for 2 tracks",
      "Consistent EP sound",
      "Up to 2 revisions per track",
      "WAV + MP3 delivery",
      "Turnaround: 10–12 days",
    ],
    cta: "Book EP Pack",
  },
  {
    name: "Mix + Feedback",
    subtitle: "Mix + Master + Detailed Notes",
    price: "From $150",
    highlight: false,
    description:
      "You get the mix and master plus a detailed written breakdown of every decision I made — what I changed and why. Perfect if you want to learn while getting results.",
    includes: [
      "Full stereo mix",
      "Master (streaming + club)",
      "400–600 word feedback document",
      "Specific notes per element",
      "Up to 2 revisions",
      "Turnaround: 7–10 days",
    ],
    cta: "Book Mix + Feedback",
  },
  {
    name: "Full Release",
    subtitle: "Stem Master — 1 Track",
    price: "From $180",
    highlight: false,
    description:
      "Stem mastering for a single track — send your grouped stems and I'll deliver a master with maximum dynamic control and clarity.",
    includes: [
      "Up to 8 stem groups",
      "Stem-level processing",
      "Final stereo master",
      "Up to 2 revisions",
      "WAV + MP3 delivery",
      "Turnaround: 5–7 days",
    ],
    cta: "Book Stem Master",
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="section-label mb-4">Packages</p>
          <h2 className="section-title">
            Clear pricing.
            <br />
            <span className="text-koda-accent">No surprises.</span>
          </h2>
          <p className="text-koda-muted text-sm mt-4 max-w-md">
            All prices are starting points. Complex projects with many stems or
            extra revisions are quoted individually — just ask.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col border p-6 transition-colors duration-200 ${
                pkg.highlight
                  ? "border-koda-accent bg-koda-accent/5"
                  : "border-koda-border bg-koda-card hover:border-koda-accent/30"
              }`}
            >
              {pkg.badge && (
                <span className="absolute -top-px left-6 bg-koda-accent text-koda-black font-mono text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                  {pkg.badge}
                </span>
              )}

              <div className={`mb-4 ${pkg.badge ? "mt-4" : ""}`}>
                <p className="font-mono text-xs text-koda-muted tracking-widest uppercase mb-1">
                  {pkg.subtitle}
                </p>
                <h3
                  className={`font-mono text-xl font-bold ${
                    pkg.highlight ? "text-koda-accent" : "text-koda-white"
                  }`}
                >
                  {pkg.name}
                </h3>
              </div>

              <div className="font-mono text-2xl font-bold text-koda-white mb-4">
                {pkg.price}
              </div>

              <p className="text-koda-text text-sm leading-relaxed mb-6 flex-1">
                {pkg.description}
              </p>

              <ul className="space-y-1.5 border-t border-koda-border pt-4 mb-6">
                {pkg.includes.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-2 text-xs ${
                      pkg.highlight ? "text-koda-text" : "text-koda-muted"
                    }`}
                  >
                    <span className="text-koda-accent shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`text-center font-mono font-bold text-xs tracking-widest uppercase py-3 px-4 transition-all duration-200 ${
                  pkg.highlight
                    ? "bg-koda-accent text-koda-black hover:bg-koda-accent-dim"
                    : "border border-koda-accent text-koda-accent hover:bg-koda-accent hover:text-koda-black"
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Fine print */}
        <div className="mt-10 border-t border-koda-border pt-8 grid sm:grid-cols-3 gap-6 text-xs text-koda-muted font-mono">
          <div>
            <span className="text-koda-accent block mb-1">Payment</span>
            50% upfront, 50% on delivery. Accepted: PayPal, bank transfer, crypto.
          </div>
          <div>
            <span className="text-koda-accent block mb-1">Revisions</span>
            Up to 2 included. Additional revisions at $30/round.
          </div>
          <div>
            <span className="text-koda-accent block mb-1">File format</span>
            Send stems as WAV/AIFF, 24-bit min. Organised and labelled.
          </div>
        </div>
      </div>
    </section>
  );
}
