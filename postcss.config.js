/** @type {import('postcss').Config} */
// postcss.config.js
export default {
  plugins: {
    // you can remove postcss-import & autoprefixer entirely
    // unless you really need them elsewhere
    '@tailwindcss/postcss': {},
  },
}
