/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        argos: {
          bg: '#f6fafe',
          bg2: '#eef1f6',
          border: '#c6c6cd',
          text: '#171c1f',
          muted: '#45464d',
          black: '#000000',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        title: ['Hanken Grotesk', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
