import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Mix",
    "Master",
    "Mix + Master",
    "Stem Mastering",
    "Track Feedback",
    "Co-Production",
    "EP Pack (2 tracks)",
    "Mix + Master + Feedback",
    "Not sure — need advice",
  ];

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your actual form endpoint (Formspree, EmailJS, etc.)
    // For now, just show success state
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="section-label mb-4">Contact</p>
            <h2 className="section-title mb-6">
              Let&apos;s work
              <br />
              <span className="text-koda-accent">on your track.</span>
            </h2>

            <p className="text-koda-text leading-relaxed mb-8">
              Tell me what you&apos;re working on. I&apos;ll get back to you within
              24 hours with a clear answer on whether I can help, what it&apos;ll
              cost, and what the timeline looks like.
            </p>

            <div className="space-y-4 border-t border-koda-border pt-8">
              <div>
                <span className="section-label block mb-1">Email</span>
                <a
                  href="mailto:koda@example.com"
                  className="font-mono text-koda-white hover:text-koda-accent transition-colors"
                >
                  koda@example.com
                </a>
              </div>
              <div>
                <span className="section-label block mb-1">Based in</span>
                <span className="font-mono text-koda-white text-sm">
                  Melbourne, AU (works worldwide)
                </span>
              </div>
              <div>
                <span className="section-label block mb-1">Response time</span>
                <span className="font-mono text-koda-white text-sm">
                  Within 24h
                </span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="border border-koda-accent/30 bg-koda-accent/5 p-10 text-center">
                <div className="font-mono text-koda-accent text-4xl mb-4">✓</div>
                <h3 className="font-mono text-koda-white text-lg font-bold mb-2">
                  Message received
                </h3>
                <p className="text-koda-muted text-sm">
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="section-label block mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-koda-card border border-koda-border text-koda-white placeholder-koda-muted font-mono text-sm px-4 py-3 focus:outline-none focus:border-koda-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="section-label block mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-koda-card border border-koda-border text-koda-white placeholder-koda-muted font-mono text-sm px-4 py-3 focus:outline-none focus:border-koda-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="section-label block mb-2">Service</label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-koda-card border border-koda-border text-koda-white font-mono text-sm px-4 py-3 focus:outline-none focus:border-koda-accent transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="section-label block mb-2">
                    About your project
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your track — genre, vibe, what you're going for, any reference tracks..."
                    className="w-full bg-koda-card border border-koda-border text-koda-white placeholder-koda-muted font-mono text-sm px-4 py-3 focus:outline-none focus:border-koda-accent transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>

                <p className="text-koda-muted text-xs text-center font-mono">
                  No spam. Just audio.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
