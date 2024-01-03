// 和数据库连接的相关操作
const mysql = require('mysql2')
const config = require('../config')

// 创建线程池
const pool = mysql.createPool({ // 连接枢纽
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT,
})

// 连接mysql
const allService = {
    query: function (sql, values) {
        // 数据库的连接是个异步操作 pool 连接
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err)
                }else {
                    // 链接成功，执行sql语句
                    connection.query(sql, values, (err, rows) => { // 这个query不是外面的函数
                        if (err) {
                            reject(err)
                        } else {
                            // 执行成功，业务逻辑
                            resolve(rows)
                        }
                        // 断开连接
                        connection.release()
                    }) 
                }
            })
        }) 
    }
}

// 登录
const userLogin = (username, password) => {
    let _sql = `select * from users where username = "${username}" and password = "${password}";`
    return allService.query(_sql)
}

module.exports = {
    userLogin
}