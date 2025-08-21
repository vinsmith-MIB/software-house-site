/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#38BDF8',
        secondary: '#9333EA',
        accent: '#22D3EE',
        background: '#0F172A',
      },
      fontFamily: {
        sans: ['Inter', 'JetBrains Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
