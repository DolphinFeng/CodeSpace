class EventEmitter {
    constructor() {
      this.event = {}  // 'run': [fun]
    }
    on(type, cb) {  // 订阅   callback回调
      if (!this.event[type]) {
        this.event[type] = [cb]
      } else {  // 此前有人订阅过，就把这个事件加进去
        this.event[type].push(cb)
      }
    }
    once(type, cb) {  // 订阅一次 
      const fn = (...args) => {
        cb(...args)
        this.off(type, fn)
      }
      this.on(type, fn)
    }
    emit(type, ...args) {  // 发布  无法确定多少个参数，因此用arguments类数组
      if (!this.event[type]) {
        return
      } else {
        this.event[type].forEach(cb => {
          cb(...args) 
        });
      }
    }
    off(type, cb) {  // 取消事件，谁要取消
      if (!this.event[type]) {
        return
      } else {
        this.event[type] = this.event[type].filter(item => item !== cb);   // 排除cb之后的数组
      }
    }
  }
  
  let ev = new EventEmitter();
  
  const fn1 = (a, b) => {
    console.log(a, b, 'fn1');
  }
  const fn2 = (a, b) => {
    console.log(a, b, 'fn2');
  }
  const fn3 = (a, b) => {
    console.log(a, b, 3);
  }
  
  ev.on('run', fn1)
  
  ev.once('run', fn2)
  
  // ev.on('run', fn3)
  // ev.off('run', fn3)  // 终止多个事件
  
  ev.emit('run', 1, 1)
  ev.emit('run', 2, 2)
  ev.emit('run', 3, 3)
  
  // ev.on('say', fn)
  // ev.emit('say', 'hello')
  
  // 发布订阅一般人用不上，但是封装一些高级库要用到