/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B2A4A',
          'navy-dark': '#071C33',
          'navy-light': '#123963',
          glass: '#8EC5E8',
          'glass-cyan': '#38BDF8',
          mist: '#EAF3FA',
          champagne: '#C9A96E',
          'champagne-light': '#DFC492',
          whatsapp: '#25D366',
          'whatsapp-dark': '#128C7E',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(11, 42, 74, 0.08)',
        'glass-hover': '0 16px 40px 0 rgba(11, 42, 74, 0.16)',
        'glow-cyan': '0 0 25px rgba(56, 189, 248, 0.3)',
      }
    },
  },
  plugins: [],
}
