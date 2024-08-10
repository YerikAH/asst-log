/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("flowbite/plugin")({
      charts: true,
    }),
  ],
};
