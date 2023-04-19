/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
     fontFamily: {
        ttricordi: 'var(--font-ttricordi)',
        raleway: 'var(--font-raleway)',
      },
    },
  },
  plugins: [],
}
