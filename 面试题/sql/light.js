class TrafficLight {
    constructor() {
        this.colors = ['red', 'yellow', 'green'];
        this.times = [3000, 1000, 2000]; // 默认红、黄、绿灯时间
        this.currentIndex = 0;
        this.isRunning = false;
    }

    setLightTime(color, time) {
        const index = this.colors.indexOf(color);
        if (index !== -1) {
            this.times[index] = time;
        }
    }

    setLightColor(color) {
        const index = this.colors.indexOf(color);
        if (index !== -1) {
            this.currentIndex = index;
        }
    }

    start() {
        this.isRunning = true;
        this.changeLight();
    }

    pause() {
        this.isRunning = false;
    }

    async changeLight() {
        while (this.isRunning) {
            const color = this.colors[this.currentIndex];
            const time = this.times[this.currentIndex];
            console.log(`${color} light`);
            
            await new Promise(resolve => setTimeout(resolve, time));
            
            this.currentIndex = (this.currentIndex + 1) % this.colors.length;
        }
    }
}

// 使用示例
const trafficLight = new TrafficLight();
trafficLight.start();

// 模拟修改红绿灯时间和颜色
setTimeout(() => {
    trafficLight.setLightTime('red', 5000); // 修改红灯时间为5秒
    trafficLight.setLightColor('green'); // 切换到绿灯
}, 10000);

// 模拟暂停
setTimeout(() => {
    trafficLight.pause(); // 暂停红绿灯
}, 20000);

// 变态红绿灯