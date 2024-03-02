function request (num) { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * 10)
        }, 1000)
    })
}

// const res1 = request(1)
// const res2 = request(res1)


async function fn() {
    const res1 = await request(1) // await会把promise中的resolve值提取出来
    const res2 = await request(res1)
    console.log(res2);
}
fn()