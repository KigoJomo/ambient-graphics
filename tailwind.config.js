/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ag-white": "#ffffff",
        "ag-ash": "#b9b9b9",
        "ag-black": "#121212",
        "ag-brown": "#C19A6B",
      },
    },
  },
  plugins: [],
};
