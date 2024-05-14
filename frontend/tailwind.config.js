/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  colors: {
      'textColor': '#fff',
      'bgColor': '#000',
      'beige': '#F5F5DC',
      'borderColor': '#F5F5DC',
  },
  daisyui: { themes: ["light", "dark"], },
  plugins: [require("daisyui")],
};
