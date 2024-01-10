module.exports = {
    presets: [  // 解析规则
        '@babel/preset-env',  // 指明babel规则
        '@vue/babel-preset-jsx',
    ],
    plugins: ['@babel/plugin-transform-runtime'],  // babel生效时间就是运行时候
}