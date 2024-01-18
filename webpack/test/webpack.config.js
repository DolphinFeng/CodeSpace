const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',  // 开发模式
  entry: {
    main: './src/main.js',  // 入口文件
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/chunk-[contenthash].js',
    clean: true // 自动清理上一次打包的结果
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/chunk-[contenthash].css',
      ignoreOrder: true
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'] // 从右往左生效
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset',
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 5 * 1024 * 1024
        //   },
        // },
        generator: {
          filename: 'images/[contenthash][ext][query]'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  }
}