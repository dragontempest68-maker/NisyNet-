/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nisyPrimary: '#4f46e5', // Profesyonel Indigo (Mavi-Mor)
      }
    },
  },
  plugins: [],
}
