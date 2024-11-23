/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        container: {
          center: true,
          padding: '1rem',
        },
        keyframes: {
          'fade-in': {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
        animation: {
          'fade-in': 'fade-in 0.5s ease-out',
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('tailwind-scrollbar'),
    ],
  };