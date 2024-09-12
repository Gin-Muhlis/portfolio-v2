/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#01FFF4',
        'bg-main': '#010114',
        'bg-second': '#000000',
        'text-main': '#FFFFFF',
        'text-second': '#EDEDF1'
      },
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'raleway': ['Raleway', 'sans-serif'],
    }
  },
  plugins: [],
}