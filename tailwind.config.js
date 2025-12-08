/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ferroverde: {
          DEFAULT: "#00663E",
          700: "#00663E",
          900: "#00462C",
        },
      },
    },
  },
  plugins: [],
};
