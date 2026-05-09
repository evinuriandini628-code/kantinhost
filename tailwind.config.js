/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        kh: {
          dark: '#0A0F1C',
          navy: '#0F172A',
          card: '#111827',
          blue: '#2563EB',
          cyan: '#38BDF8',
          soft: '#7DD3FC'
        }
      },
      boxShadow: {
        neon: '0 0 24px rgba(56, 189, 248, 0.35)',
        glass: '0 20px 60px rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        'kh-gradient': 'radial-gradient(circle at top, rgba(37, 99, 235, 0.30), transparent 40%), linear-gradient(135deg, #0A0F1C 0%, #0F172A 100%)'
      }
    }
  },
  plugins: []
}
