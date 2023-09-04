/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '10px',
      },
      fontFamily: {
        sans: 'Inter',
        'sans-serif': 'Inter',
      },
      colors: {
        dark: '#08090B',
        primary: '#2FBDFC',
        secondary: '#252C41',
      },
      screens: {
        xs: '500px',
      },
    },
  },
  plugins: [],
};
