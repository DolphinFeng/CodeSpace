const fs = require('fs');

// console.log(fs.statSync('./avatar.jpg')) // mtime是maketime 里面记录了 是0时区的时间
// dev：文件所在的设备，设备id  mode ：文件的权限值  nlink:文件有几个链接可访问到  uid：文件所属的用户 gid ：组id 隶属哪个组  
// 对象原型中有个方法
// 浏览器的缓存用到的手段，靠时间的变化来判断文件是否改变

const info = fs.statSync('./pic')
// const info = fs.isFile()
// console.log(info.isDirectory())
console.log(info.isFile())