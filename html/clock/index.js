const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
// console.log(secondHand);

function setTime(){
    const now = new Date()
    //获取当前的秒数
    const seconds = now.getSeconds()
    const secondsDegrees = seconds * 6 + 90//从90°开始旋转
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    //获取当前的分钟
    const minutes = now.getMinutes()
    const minutesDegrees = minutes * 6 + 90
    minHand.style.transform = `rotate(${minutesDegrees}deg)`
    //获取当前的时针
    const hour = now.getHours()
    const hoursDegrees = hour *30 + 90 + (minutes/60)*30
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setTime()

setInterval(setTime, 1000)