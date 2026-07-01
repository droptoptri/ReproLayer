import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#07090D",
        surface: "#0E1117",
        elevated: "#121722",
        primary: "#F7F8FA",
        secondary: "#9AA4B2",
        muted: "#667085",
        green: "#7CFFB2",
        blue: "#7AA7FF",
        red: "#FF6B6B",
        border: "#1F2633",
      },
    },
  },
  plugins: [],
};

export default config;
