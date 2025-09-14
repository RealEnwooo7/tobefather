import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1B2B",
        bleuNuit: "#0E2740",
        primary: "#2357AA",
        indigoOcean: "#3C4BD9",
        gradientStart: "#2F80ED",
        gradientMid: "#5A7BEF",
        gradientEnd: "#6C63FF",
        textLight: "#E6EAF0",
        textDark: "#0E1622",
        success: "#2DD4BF",
        warning: "#F59E0B",
        danger: "#EF4444"
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem"
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.2)"
      },
      keyframes: {
        slowGradient: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-10%)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        slowGradient: "slowGradient 20s ease-in-out infinite",
        fadeUp: "fadeUp 400ms ease-out forwards"
      }
    },
    fontFamily: {
      sans: ["var(--font-inter)"],
      display: ["var(--font-poppins)"]
    }
  },
  plugins: []
};
export default config;
