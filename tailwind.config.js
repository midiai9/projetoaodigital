/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Identidade AlwaysOn — gradiente azul → roxo (amostrado do logo)
        brand: {
          blue: '#3E6BD6',
          azure: '#4B66CA',
          indigo: '#5C5ABE',
          violet: '#6951B5',
          purple: '#7B46AA',
          magenta: '#9A3E9C',
        },
        ink: {
          900: '#0B1220',
          800: '#0F172A',
          700: '#1E293B',
          500: '#475569',
          400: '#64748B',
          300: '#94A3B8',
        },
        paper: '#F7F9FC',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #3E6BD6 0%, #5C5ABE 45%, #7B46AA 75%, #9A3E9C 100%)',
        'brand-soft': 'linear-gradient(135deg, rgba(62,107,214,0.12) 0%, rgba(123,70,170,0.12) 100%)',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,0.04), 0 12px 32px -12px rgba(15,23,42,0.12)',
        glow: '0 20px 60px -20px rgba(94,72,170,0.45)',
      },
      keyframes: {
        'gradient-pan': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
