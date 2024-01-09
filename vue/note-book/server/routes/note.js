// 日记相关的接口
const Router = require('@koa/router')
const router = new Router()
const { findNoteListByType, findNoteDetailById, notePublish } = require('../controllers/mysqlControl.js')
const { formateDate } = require('../config/utils')  // 后缀可以不写

// 获取列表
router.post('/findNoteListByType', async ctx => {
    const { note_type } = ctx.request.body  // get ctx.query.params  
    // console.log(note_type)   
    // 此时后端已经拿到美食了
    // console.log(result)  // 日记也有可能是空的，所以不用判断
    try {
        const result = await findNoteListByType(note_type)
        ctx.body = {
            code: '8000',
            data: result,
            msg: '成功'
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务端异常'
        }
    }
})

// 获取详情
router.post('/findNoteDetailById', async ctx => {
    const { id } = ctx.request.body  
    try {
        const result = await findNoteDetailById(id)
        console.log(result) //
        if (result.length) {
            ctx.body = {
                code: '8000',
                data: result[0],
                msg: '成功'
            }
        } else {
            ctx.body = {
                code: '8004', // 程序性错误
                data: 'error',
                msg: '查找失败'
            }
        } 
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务端异常'
        }
    }
})

// 发布笔记
router.post('/publish', async (ctx) => {
    const { note_content, title, head_img, note_type, nickname, userId } = ctx.request.body
    const c_time = formateDate(new Date())
    const m_time = formateDate(new Date())
    console.log(c_time)
    try {
        const result = await notePublish([note_content, title, head_img, note_type, nickname, userId, c_time, m_time])
        // insert执行成功后会返回affectedRows 影响的行数
        if (result.affectedRows !== 0) {
            ctx.body = {
                code: '8000',
                data: 'success',
                msg: '发布成功'
            }
        } else {
            // 文章不需要校验，因为会自动生成id，不会重，这里是可能是前端少传了参数
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '发布失败'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务端异常'
        }
    }
})

module.exports = router