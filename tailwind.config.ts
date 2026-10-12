import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08080a",
        paper: "#e8e0d3",
        sage: {
          DEFAULT: "#6fa88a",
          deep: "#356b52",
          muted: "#4a7d64",
        },
        muted: "#8f877c",
        line: "rgba(232, 224, 211, 0.12)",
        panel: "#11110e",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 80px 0 rgba(53, 107, 82, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
