import axios from 'axios'

const baseUrl = ''
// 不管后端部署到哪里去了，只需要改这里

export function get(url) {
    // 拿到路径的后半段就可以拿到完整的
    return function(params = {}){
        // 封装成一个闭包的效果
        // return axios.get()这是axios自带的方法
        return axios.get(baseUrl+url, {
            // 可以往params传账号密码
            params
        }).then(res => {
            const { errno, data } = res.data
            // 对象的解构
            if(errno === 0){
                // 代表没有报错
                return data
            }
        })
    }
}

// let resFn = get('/seller')
// resFn().then(data => {
//     // data就是我们想要的数据，resFn就是function(params) axios内置了一个promise
// })

// export default get 与 export function get有区别