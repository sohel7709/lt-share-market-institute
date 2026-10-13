import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#040812",
          900: "#0A0F1E",
          800: "#0D1528",
          700: "#111D35",
          600: "#162040",
        },
        blue: {
          brand: "#1A6BFF",
          light: "#4D8FFF",
          glow: "#0052CC",
        },
        green: {
          profit: "#00D26A",
          light: "#00F07A",
          dark: "#00A855",
        },
        gold: "#F5C518",
        surface: "#111827",
        "surface-2": "#1A2236",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern":
          "linear-gradient(135deg, #040812 0%, #0A0F1E 50%, #0D1528 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(26,107,255,0.05) 0%, rgba(0,210,106,0.05) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(26,107,255,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(26,107,255,0.6)" },
        },
      },
      boxShadow: {
        "blue-glow": "0 0 30px rgba(26,107,255,0.3)",
        "green-glow": "0 0 30px rgba(0,210,106,0.3)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.4)",
        glass: "0 8px 32px rgba(0,0,0,0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
