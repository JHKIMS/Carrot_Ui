/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode:"media", //"class"로 하면 선택적 , media는 컴퓨터 옵션을 따라간다.
  plugins: [],
};
