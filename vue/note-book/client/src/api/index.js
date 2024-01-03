import axios from 'axios'
import { showSuccessToast, showFailToast } from 'vant';
// 做一些拦截操作
axios.defaults.baseURL = 'http://localhost:3000' // http 域名 端口 后端改不了
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截这里用不上

// 相应拦截
axios.interceptors.response.use(res => {  // res代表响应体
    if (res.status !== 200) { // 程序错误
        // 引入函数，不用vue
        showFailToast('服务端异常');
    } else {
        if (res.data.code !== '8000') { // 逻辑性错误： 就不写死了   body对应data
            showFailToast(res.data.msg)
            // Promise.reject(res) // reject可以这么用
            return res
        } else {
            // 登录成功
            showSuccessToast(res.data.msg)
            return res.data
        }

    }
})

export default axios // 被上面代码修饰后的axios  default不需要打{}