/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all source files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Blue for buttons
        secondary: "#9333EA", // Purple for headings
        accent: "#F59E0B",   // Amber for highlights
      },
    },
  },
  plugins: [],
};
