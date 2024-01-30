const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'xxxx' // 读取当前开发环境，安卓需要将localhost改成ip地址

export default baseUrl