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

// 登录  sql语句 =不要打空格 另外记得分号结尾
const userLogin = (username, password) => {
    let _sql = `select * from users where username="${username}"and password="${password}";`
    return allService.query(_sql)
}

// 校验账号是否存在 
const userFind = (username) => {
    let _sql = `select * from users where username="${username}";`
    return allService.query(_sql)
}

// 注册
const userRegister = (values) => { // 传一个对象进来  values = [username, password, nickname]
    let _sql = `insert into users set username=?,password=?,nickname=?;`
    return allService.query(_sql, values)
}

// 根据类型查找笔记列表
const findNoteListByType = (note_type) => {
    let _sql = `select * from note where note_type="${note_type}";`
    return allService.query(_sql)  // 链接数据库，执行sql语句
}

// 根据id查找笔记细节
const findNoteDetailById = (id) => {
    let _sql = `select * from note where id="${id}";`
    return allService.query(_sql)
}

// 发布笔记
const notePublish = (values) => {
    let _sql = `insert into note set note_content=?,title=?,head_img=?,note_type=?,nickname=?,userId=?,c_time=?,m_time=?;`
    return allService.query(_sql, values)  // 植入数据就要传参
}

module.exports = {
    userLogin,
    userFind,
    userRegister,
    findNoteListByType,
    findNoteDetailById,
    notePublish,
}
