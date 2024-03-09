import axios from 'axios'
import router from '../router'

// axios.defaults.headers['token'] = localStorage.getItem('token') || ''// 只要是axios发的请求，都会带这个请求，并且请求头有token
axios.defaults.baseURL = "http://localhost:3000"

// 请求拦截 
axios.interceptors.request.use(config => {
    let token = localStorage.getItem('token')
    if (token) {
        // console.log('1111111111');
        config.headers.Authorization = token
    }
    return config // 把请求拦截下来，并往请求头中加入token，然后return 
})

// 做一个响应拦截，比如登录失败需要提示登录失败 发请求和接受都需要经过axios的手
axios.interceptors.response.use(res => {
    if (res.data.code !== 0 && res.data.code) { // 逻辑性错误，比如密码敲错了，并不是程序性错误
        return Promise.reject(res.data.error) // 这么做的意义是，让axios好去调试，可以捕获错误
    }

    if (res.data.status >= 400 && res.data.status < 500) { // 程序性错误
        console.log(res); 
        // 状态码在[400, 500) 就认为用户没有权限，就强行把你重定向到登录页面
        router.push('/login')
        return Promise.reject(res.data)
    }

    return res // 响应的内容没有问题
})

export function post(url, body) { // 调用axios去发post请求
    // console.log(axios.post(url, body));
    return axios.post(url, body)
}