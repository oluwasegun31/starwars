/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        author: "'Author', sans-serif",
        supreme: "'Supreme', sans-serif"
      },
      colors: {
        primary: "#BB2233",
        secondary: "#FA8603",
        tertiary: "#FAE3CF",
        alternate: "#0A0F24"
      },
    },
  },
  plugins: [],
}

