/**@type {import("tailwindcss").Config} */
module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    plugins: [
      require('flowbite/plugin')
    ]
  }
};