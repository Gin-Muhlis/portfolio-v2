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
    },
    boxShadow: {
      'cust-shad-primary': '4px 4px 8px rgba(1, 255, 244, 0.3)',
      'cust-shad-text-primary': '0 0 10px rgba(1, 255, 244, 0.3)',
    },
    backgroundImage: {
      'skill-gradient': 'linear-gradient(to right, #010111 0%, #131334 43%, #5858BC 100%)',
    }
  },
  plugins: [],
}