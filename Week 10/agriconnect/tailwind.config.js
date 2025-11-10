/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5C6AC4",   // Indigo
        secondary: "#2DD4BF", // Teal
        accent: "#EC4899",    // Pink
        bg: "#F5F5F5",        // Background
        surface: "#FFFFFF",   // Card background
        text: "#1F2937",      // Dark text
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      }
    },
  },
  plugins: [],
}
