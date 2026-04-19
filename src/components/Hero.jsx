import photo10 from "../assets/PRESKIT KODA10.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden px-6"
    >
      {/* Artist photo background */}
      <img
        src={photo10}
        alt=""
        className="hero-photo absolute top-16 md:top-0 left-0 h-full object-contain opacity-20 pointer-events-none"
      />
      {/* Gradient overlay to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-koda-dark/80 via-koda-dark/40 to-transparent pointer-events-none" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#e8ff00 1px, transparent 1px), linear-gradient(90deg, #e8ff00 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-koda-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        <h1 className="font-mono font-bold text-6xl md:text-8xl lg:text-9xl text-koda-white tracking-tight leading-none mb-6">
          KODA
          <br />
          <span className="text-koda-accent">(AR)</span>
        </h1>

        <p className="font-mono text-koda-muted text-xs tracking-widest2 uppercase mb-8">
          Mix · Master · Stem Mastering · Co-Production
        </p>

        <p className="text-koda-text text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
          Club-ready sound crafted by an active techno producer.
          Your tracks, built for the dance floor.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#packages" className="btn-primary">
            View Packages
          </a>
          <a href="#music" className="btn-outline">
            Hear My Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="section-label text-[10px]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-koda-muted to-transparent" />
      </div>
    </section>
  );
}
