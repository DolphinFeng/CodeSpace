const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // npm i html-webpack-plugin -D 引入这个安装的插件，loader只能读懂，插件还能做其他操作
// 这个文件配置给webpack看的，告诉他开发模式，入口文件，建议好后放到 出口
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  // npm i mini-css-extract-plugin -D 这是个对象插件
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    mode: 'development',  // 开发模式，还有个production 生产环境，生产环境考虑的东西会很多
    entry: {
        main: './src/main.js',  // 入口文件  
    },
    output: { 
        path: path.resolve(__dirname, './dist'),  // 拿到learn-pack的绝对路径，给你处理后放到dist文件夹
        filename: 'js/chunk-[contenthash].js',  // contenthash是hash值，不能乱写，这个意义打包出来就是不一样的文件
        clean: true, // 自动清理上次打包的结果
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',  // 生成index.html
            inject: 'body',  // 植入到index.html的body标签，有些js必须出现在body之前就是head,所以没有默认放在body中
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/chunk-[contenthash].css',   // 声称在dist中的styles
            ignoreOrder: true,   
        }),
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,  // 碰到文件为css时就去use
                use: [MiniCssExtractPlugin.loader, 'css-loader']  // 从右往左生效，顺序不能乱，css是读懂css代码 style是把css以style标签的形式放进去，先读懂再植入
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/, // $代表后缀
                type: 'asset', // 静态
                // parser: {
                //     dataUrlCondition: {  // 转成base64
                //         maxSize: 5 * 1024 * 1024, 
                //     },
                // },
                generator: {
                    filename: 'images/[contenthash][ext][query]',  // ext就是后缀 query是参数
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
                
            }
        ]
    }
}