/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js" ],
  theme: {
    extend: {
      fontFamily: {
        fustat: ['Fustat', 'sans-serif'],
        NotoKufi: ['Noto Kufi Arabic', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

