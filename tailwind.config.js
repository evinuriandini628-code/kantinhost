/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kh-blue': '#00A3FF', // Warna biru neon utama
        'kh-dark': '#050505', // Latar belakang hitam pekat
        'kh-card': 'rgba(255, 255, 255, 0.03)', // Transparansi kaca
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 163, 255, 0.3)', // Efek cahaya neon
      }
    },
  },
  plugins: [],
}
