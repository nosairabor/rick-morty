/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors:{
      'blue': '#0d6efd',
      'transparent': '#F8F9FA',
      'white': '#FFFFFF',
      'green': '#198754',
      'red': '#dc3545',
      'gray': '#6c757d'
    }
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}

