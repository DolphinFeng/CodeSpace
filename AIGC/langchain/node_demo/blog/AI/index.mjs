// js 设计之初 仅仅是个脚本，一个礼拜就诞生了
// 早期的js没有模块化这个概念，早期的模块化处理是文件的加载顺序手动处理
// <script src="./a.js"></script> 
// <script src="./b.js"></script> 
// <script src="./c.js"></script>
// 因为script是会产生一个阻塞的作用，除非加个defer 而css不会 这样就解决了模块化问题
// 浏览器的v8引擎，将js底层运行成二进制，他不负责浏览器ui，因此这就是重绘靠的浏览器
// node 是 c++ 封装的，负责的是js运行过程，不负责显示的界面 为何添加commonJS模块化
// 因为当你用node写项目时，后端天生mvc，不可能小项目，所以阻塞会很难受
// 那为何已经有了CommonJS后，还搞个ESModule出来，
// 因为前端应用随着vue/react也变得复杂了，什么单页应用，状态管理，组件化
// CommonJS无法满足前端模块化复杂化的需求