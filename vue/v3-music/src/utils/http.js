import axios from 'axios' // 这是最流行的ajax请求库
// fetch xhr vue应用时候，不能复用，他们需要统一管理，App而不是页面 他会在所有的请求前面加上baseURL地址
// 
axios.defaults.baseURL = 'http://localhost:3000' // axios需要做一些统一的配置
axios.defaults.timeout = 10 * 1000; // 超时
axios.defaults.maxBodyLength = 5 * 1024 * 1024 // 发表评论时，图片上传超过5M不让上传，这就是为了统一管理

const http = {
    get(url, params = {}) {
        return new Promise((resolve, reject) => {
            // 请求的抽象
            axios
                .get(url, {params})
                .then((res) => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err.data)
                })
        })
    }
}

export default http 

// 为何这里分api.js 和 http.js 两个文件写：