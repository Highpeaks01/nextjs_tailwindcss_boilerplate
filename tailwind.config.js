import {heroui} from "@heroui/react"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",  // App Router files
    "./src/components/**/*.{js,ts,jsx,tsx}", // Components
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', 'Poppins'],
      'serif': ['ui-serif', 'Georgia', 'Poppins'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'Poppins'],
      'display': ['Oswald', 'Poppins'],
      'body': ['Open Sans', 'Poppins'],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
