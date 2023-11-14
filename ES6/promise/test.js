function xq(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log('我要相亲了！')
            resolve('相亲成功')
        },2000)
    })

}

function marry(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('我要结婚了！')
            resolve('生不生？')
        },1000)
    })
}

function baby(){
    setTimeout(() => {
        console.log('生娃！')
    },500)
}

xq()
.then((res) => {
	console.log(res)
    return marry()
})
.then((res) => {
	console.log(res)
    baby()
})