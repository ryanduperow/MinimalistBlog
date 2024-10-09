/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'accent': '#883aea',
        'accent-light': '#e0ccfa',
        'accent-dark': '#310a65',
      },
    },
  },
  plugins: [],
}