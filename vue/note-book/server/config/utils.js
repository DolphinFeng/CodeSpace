// utils.js 工具类函数， 比如防抖节流，就可以写在这里
const formateDate = (date) => {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    if (month < 10) {
        month = '0' + month 
    }
    if (day < 10) {
        day = '0' + day
    }

    return `${year}年${month}月${day}日`
}

module.exports = {
    formateDate,
}