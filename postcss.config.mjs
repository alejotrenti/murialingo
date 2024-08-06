/** @type {import('postcss-load-config').Config} */
const config = {
// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};


export default config;
