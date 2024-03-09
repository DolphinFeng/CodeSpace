//1
// let promise=new Promise((resolve,reject)=>{
//     console.log(1);
//     resolve('promise1 resolve')
//   })
//   const promise2=promise.then(res=>{
//     console.log(res);
//     return new Promise((resolve)=>resolve(3))
//   })
//   console.log('2',promise2);
//2 
// var a = 1;
// let b = 2;
// console.log(a,b)
//3
// Promise.resolve(1)
//     .then(
//     res => new Promise((resolve, reject) => {resolve(2)})
//   )
//   .catch(err => {
//     console.log(err) 
//     return 3 
//   })
//   .then((res) => {
//     console.log(res)
//   })

// let promise = new Promise(resolve=>{resolve(1)})
//4
// Promise.resolve(1)
// .then(
//     res => {
//         new Promise((resolve, reject) => {resolve(2)})
//     }
//   ).catch(err => {
//     console.log(err) 
//     return 3 
//   }).then((res) => {
//     console.log(res)
//   })

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('111111111111')
//         resolve(1)
//     }, 1000)
// })
// promise
// .then((res)=>{
//     console.log(res);
// })
// .then((res)=>{
//     console.log(res);
// })

Promise.reject(1).then(
    res => {new Promise((resolve, reject) => {reject(2)})},
    res => {return 3}
  ).catch((err) => {
    console.log(err)
  })