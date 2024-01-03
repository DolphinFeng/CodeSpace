// 声明好mysql
const config = {
    database: {
        DATABASE: 'notebook',
        USERNAME: 'root',
        PASSWORD: '123456',
        PORT: '3306',
        HOST: 'localhost' // 主机地址，以后部署到服务器，服务器的localhost
    }
}

module.exports = config