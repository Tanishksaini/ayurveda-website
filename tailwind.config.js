/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f8faf8',
          100: '#e8efe9',
          200: '#d1dfd3',
          300: '#a7c2aa',
          400: '#85a889',
          500: '#618964',
          600: '#4d6e50',
          700: '#405842',
          800: '#364738',
          900: '#2d392f',
        },
      },
      fontFamily: {
        serif: ['Crimson Text', 'serif'],
      },
    },
  },
  plugins: [],
};