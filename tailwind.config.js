/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ag-white': 'var(--ag-white)',
        'ag-ash': 'var(--ag-ash)',
        'ag-black': 'var(--ag-black)',
        'ag-brown': 'var(--ag-brown)',
      },
      cursor: {
        pointer: 'url("/images/cursor-pointer.webp"), pointer',
      },
    },
  },
  plugins: [],
}
