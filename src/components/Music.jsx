const tracks = [
  {
    title: "Return (Original Mix)",
    description: "Alula Tunes",
    embedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/indikodaa/koda-ar-return-original-mix-alula-tunes&color=%23e8ff00&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    placeholder: false,
  },
  {
    title: "Forest Keeper (Original Mix)",
    description: "Minimal Genesis V.A. — Joker Black Label",
    embedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/indikodaa/koda-ar-forest-keeper-original-mix&color=%23e8ff00&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    placeholder: false,
  },
  {
    title: "King of Darkness",
    description: "PRYZM Waves",
    embedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/indikodaa/koda-ar-king-of-darkness-pryzm&color=%23e8ff00&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true",
    placeholder: false,
  },
];

function TrackPlaceholder({ title, description }) {
  return (
    <div className="border border-koda-border bg-koda-card h-40 flex flex-col items-center justify-center gap-2 text-center px-4">
      <div className="w-8 h-8 border border-koda-muted rounded-full flex items-center justify-center">
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
          <path d="M1 1L11 7L1 13V1Z" fill="#555" />
        </svg>
      </div>
      <p className="font-mono text-xs text-koda-white">{title}</p>
      <p className="font-mono text-[10px] text-koda-muted">{description}</p>
      <p className="font-mono text-[9px] text-koda-muted/50">
        Replace embed URL in Music.jsx
      </p>
    </div>
  );
}

export default function Music() {
  return (
    <section id="music" className="py-28 px-6 bg-koda-dark">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="section-label mb-4">Music</p>
          <h2 className="section-title">
            Hear the work
          </h2>
          <p className="text-koda-muted text-sm mt-4 max-w-md">
            Original tracks by KODA. This is the sound I bring to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {tracks.map((track) => (
            <div key={track.title} className="flex flex-col gap-2">
              {track.placeholder ? (
                <TrackPlaceholder title={track.title} description={track.description} />
              ) : (
                <iframe
                  title={track.title}
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={track.embedUrl}
                  className="border border-koda-border"
                />
              )}
            </div>
          ))}
        </div>

        {/* SoundCloud / Bandcamp CTA */}
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="https://soundcloud.com/indikodaa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs py-3 px-6"
          >
            All tracks on SoundCloud ↗
          </a>
        </div>
      </div>
    </section>
  );
}
