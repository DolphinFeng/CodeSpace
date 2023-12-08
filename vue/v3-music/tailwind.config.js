/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // 让这些文件支持tailwind src是开发目录   ** 表示src目录下子目录，孙目录……  
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

