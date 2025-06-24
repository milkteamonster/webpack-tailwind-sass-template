module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class',
   content: [
    "./src/**/*.html", // 包含所有 src 目錄下的 html
    "./src/**/*.js",   // 如果有 js/ts 檔案也要加
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};