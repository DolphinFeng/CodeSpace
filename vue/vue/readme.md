安装Vue流程：
    文件夹中继承终端打开
    npm init vite
    rate
    选择Vue
    选择JavaScript
    cd rate
    npm i
    npm run dev
// http://localhost:5173/ 如果安装成功则可打开该网站
    ctrl + C 退出来
    npm run build

- vue 脚手架
    -npm init vite // 1.初始化vue项目（到远程github下载了一个项目模板（starter））  2.初始化时选择了vite，他速度很快
        // index页面
        // src中 main.js入口文件
    - cd rate 进入到项目目录
        src开发目录
    - npm i  (install安装项目依赖)安装哪些依赖：package.js中有个dependencies安装的是3.3.8   devDependencies中的vite
        vue 3.0+
        vite
    - npm run dev  （development开发阶段）  vite启动才能启动
        script脚本区    
    - npm run build （生成dist结果目录，index.html首页， assets目录有我们需要用到的）
    
    - 把页面按组件划分
        每个组件都是一个vue文件
            - html 结构
            - script js
            - sytle css 

- 组件化思想
    component
    开发单元html标签 太低级了 没有复用性
    vue 提供了组件的概念
    组件是一堆html,css,js的集合，完成某个展示和功能
    开发任务的拆分

- Dom 树  ->  组件树
    这个组件做过，可以不用写
    .Vue 组件的思想 分工 复用
- devtool 
- 数据 MVVM思想（view module）
    - ref 响应式
- Laf 
