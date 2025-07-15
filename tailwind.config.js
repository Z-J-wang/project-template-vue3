/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false // 禁用全局样式重置，以避免样式冲突。关闭此选项会取消基础样式的引入。本项目引入 TailwindCSS 只是为了使用工具类，故关闭。
  },
  prefix: '',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // tailwind CSS 生效路劲
  theme: {
    extend: {}
  },
  plugins: []
}
