import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1e3a5f",
          dark: "#142a47",
          light: "#2c4f7c",
        },
        gold: {
          DEFAULT: "#f0a82e",
          dark: "#d18f1a",
        },
      },
      fontFamily: {
        // System fonts — baad mein Google Font (e.g. Poppins) add kar sakte ho
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
