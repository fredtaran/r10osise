/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'body-bg': '#EFECEC',
        'button-bg': '#FC6736',
        'banner-bg': '#0C2D57',
        'button-border': '#FFB0B0',
      },
    },
    fontFamily: {
      'Roboto': ['Roboto, sans-serif'],
    },
    container: {
      padding: '2rem',
      center: true,
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

