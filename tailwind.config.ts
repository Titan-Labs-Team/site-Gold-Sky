import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Golden Sky Brand Colors
        sage: {
          50: "#f4f7f4",
          100: "#e6ebe5",
          200: "#cdd8cc",
          300: "#a8bca6",
          400: "#8faf8c",
          500: "#6a9266",
          600: "#537550",
          700: "#435d41",
          800: "#384c36",
          900: "#2f3f2e",
          950: "#172118",
        },
        gold: {
          50: "#fbf8f1",
          100: "#f5eedf",
          200: "#ebdcbe",
          300: "#ddc494",
          400: "#c9a96e",
          500: "#be9251",
          600: "#b07d43",
          700: "#926439",
          800: "#775134",
          900: "#61442d",
          950: "#352216",
        },
        cream: {
          50: "#fafaf6",
          100: "#f5f4ed",
          200: "#f0e9dc",
          300: "#e5dbc8",
          400: "#d4c4a8",
          500: "#c4ae8c",
          600: "#b19672",
          700: "#967c5d",
          800: "#7a664f",
          900: "#655542",
          950: "#352c22",
        },
        forest: {
          50: "#f3f6f3",
          100: "#e3e9e3",
          200: "#c7d4c8",
          300: "#a0b5a2",
          400: "#759078",
          500: "#547257",
          600: "#415b44",
          700: "#354a38",
          800: "#2b4a2f",
          900: "#243226",
          950: "#121b14",
        },
      },
        charcoal: '#1a1a1a',
        'warm-gray': '#7a7a7a',
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config
