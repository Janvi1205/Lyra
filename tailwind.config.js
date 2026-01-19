/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        julius: ['"Julius Sans One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
