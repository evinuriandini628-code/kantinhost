/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kh-blue': '#00A3FF',
        'kh-dark': '#050505',
        'kh-card': 'rgba(255, 255, 255, 0.03)',
      },
      boxShadow: {
        'neon-blue': '0 0 25px rgba(0, 163, 255, 0.3)',
      },
      padding: {
        '4.5': '1.125rem', // Custom padding untuk tombol biar lebih berisi
      }
    },
  },
  plugins: [],
}
