export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-koda-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-koda-muted">
          <span className="text-koda-white font-bold">KODA (AR)</span> — Mix · Master · Stem · Co-Production
        </div>

        <div className="flex gap-6">
          <a
            href="https://soundcloud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="section-label text-[10px] hover:text-koda-accent transition-colors"
          >
            SoundCloud
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="section-label text-[10px] hover:text-koda-accent transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://bandcamp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="section-label text-[10px] hover:text-koda-accent transition-colors"
          >
            Bandcamp
          </a>
        </div>

        <div className="font-mono text-[10px] text-koda-muted">
          © {year} KODA (AR)
        </div>
      </div>
    </footer>
  );
}
