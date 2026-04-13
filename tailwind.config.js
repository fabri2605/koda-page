/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        koda: {
          black: "#0a0a0a",
          dark: "#111111",
          card: "#161616",
          border: "#222222",
          accent: "#e8ff00",
          "accent-dim": "#b8cc00",
          muted: "#555555",
          text: "#d4d4d4",
          white: "#f0f0f0",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
}

