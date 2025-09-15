import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}", // tremor UI
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        md: "60px",
        xl: "120px",
        "2xl": "256px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // 🌸 light mode (pink/purple theme)
        tremor: {
          brand: {
            faint: colors.pink[50],
            muted: colors.pink[200],
            subtle: colors.pink[400],
            DEFAULT: colors.pink[500], // main brand
            emphasis: colors.pink[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.pink[50],
            subtle: colors.pink[100],
            DEFAULT: colors.white,
            emphasis: colors.purple[700],
          },
          border: {
            DEFAULT: colors.pink[200],
          },
          ring: {
            DEFAULT: colors.pink[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[600],
            emphasis: colors.purple[800],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
        // 🌑 dark mode (pink + purple)
        "dark-tremor": {
          brand: {
            faint: "#2b0a2f",
            muted: colors.purple[950],
            subtle: colors.purple[800],
            DEFAULT: colors.pink[500],
            emphasis: colors.pink[400],
            inverted: colors.purple[950],
          },
          background: {
            muted: "#1a0b1e",
            subtle: colors.purple[900],
            DEFAULT: colors.gray[900],
            emphasis: colors.pink[300],
          },
          border: {
            DEFAULT: colors.pink[800],
          },
          ring: {
            DEFAULT: colors.pink[700],
          },
          content: {
            subtle: colors.gray[500],
            DEFAULT: colors.gray[300],
            emphasis: colors.pink[200],
            strong: colors.white,
            inverted: colors.purple[950],
          },
        },
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:pink|purple)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:pink|purple)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:pink|purple)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
  ],
  plugins: [
    require("@headlessui/tailwindcss"),
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
  ],
};

export default config;
