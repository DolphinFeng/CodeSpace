// 和数据库连接相关的操作  npm i mysql
const mysql = require('mysql2');
const config = require('../config')

// 创建线程池
const pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT,
})

// 连接mysql
const allService = {
    query: function(sql, values) {  // 数据库连接 异步
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err)
                } else {
                    // 执行sql语句
                    connection.query(sql, values, (err, rows) => {
                        if (err) {
                            reject(err)
                        } else {
                            // 业务逻辑，返回出去写
                            resolve(rows)
                        }
                        connection.release() 
                    })
                }
            })
        })
    }
}

// 登录
const userLogin = (username, password) => {
    let _sql = `select * from users where username="${username}"and password="${password}";`
    return allService.query(_sql)
}

// 校验注册时账号是否已存在
const userCheck = (username) => {
    let _sql = `select * from users where username="${username}";`
    return allService.query(_sql)
}

const userRegister = (values) => { // values == [username, password, nickname]
    let _sql = `insert into users set username=?,password=?,nickname=?;`
    return allService.query(_sql, values)
}

module.exports = {
    userLogin,
    userCheck,
    userRegister,
    
}