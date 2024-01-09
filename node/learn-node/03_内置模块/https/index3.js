fetch('https://api.juejin.cn/interact_api/v1/message/count?aid=2608&uuid=&spider=0')
.then(res => res.json())
.then(data => {
    console.log(data)
})