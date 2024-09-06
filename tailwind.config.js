/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#04192d',
        'custom-light-blue': '#0788ff',
        'custom-dark-blue': '#050c16',
        'custom-black': '#040c16',
      },
    },
  },
  plugins: [],
}

