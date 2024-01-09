const axios = require('axios')

axios.get('https://api.juejin.cn/interact_api/v1/message/count?aid=2608&uuid=&spider=0')
.then(res => {
    console.log(res.data)
})