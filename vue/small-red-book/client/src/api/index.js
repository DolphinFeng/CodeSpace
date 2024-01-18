import axios from 'axios'
import { showSuccessToast, showFailToast } from 'vant';

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截这里用不上

// 响应拦截
axios.interceptors.response.use(res => {
    if (res.status !== 200) { // 程序错误
        showFailToast('服务端异常')
    } else {
        if (res.data.code !== '8000') { // 逻辑错误
            showFailToast(res.data.msg)
            return Promise.reject(res)
        }
        return res.data
    }
})

export default axios