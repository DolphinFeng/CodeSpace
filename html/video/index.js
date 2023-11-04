var speed = document.querySelector('.speed')
var bar = document.querySelector('.speed-bar')
var video = document.querySelector('.flex')

console.log(speed);

speed.addEventListener('mousemove', function(e){
    console.log(e.y);
    var y = e.y - speed.offsetTop      /*容器speed距离浏览器顶部的距离*/ 
    var percent = y / speed.offsetHeight      /*读容器speed的高度*/ 
    var height = Math.round(percent * 100) + '%'
    bar.style.height = height

    var min = 0.4
    var max = 100
    var playbackRate = percent * (max-min) + min
    bar.textContent = playbackRate.toFixed(2) + 'x'  /*保留两位小数*/ 
    console.log(height);

    //视频播放速度
    video.playbackRate = playbackRate

})