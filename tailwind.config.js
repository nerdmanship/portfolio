/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-ibm-mono)'],
        sans: ['var(--font-inter)'],
      },
      screens: {
        'md': '960px',
      },
    },
  },
  plugins: [],
}

