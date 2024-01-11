class EventEmitter {
    constructor() {
        this.event = {}  // 'run': function
    }
    on(type, cb) {
        if(!this.event[type]) {
            this.event[type] = [cb]
        } else {
            this.event[type].push(cb)
        }
    }
    once(type, cb) {
        const fn = (...args) => {
            cb(...args)
            this.off(type, fn)
        }
        this.on(type, fn)
    }
    emit(type, ...args) {
        if(!this.event[type]) {
            return 
        } else {
            this.event[type].forEach(cb => {
                cb(...args)   // 这里不打...接受的就是数组
            })
        }
    }
    off(type, cb) {
        if (!this.event[type]) {
            return 
        } else {
            this.event[type] = this.event[type].filter(item => item !== cb)
        }
    }
  }
  
  let ev = new EventEmitter();
  
  const fn = (...args) => {
    console.log(...args, 1)
  }

  const fn2 = (...args) => {
    console.log(...args, 2)
  }

  const fn3 = (...args) => {
    console.log(...args, 3)
  }

  ev.on('run', fn)
  ev.once('run', fn2)
  ev.on('run', fn3)
//   ev.off('run', fn3)
  ev.emit('run', 1, 2)
  ev.emit('run', 1, 2)
  ev.emit('run', 1, 2)
  

//   ev.on('say', fn)
//   ev.emit('say', 'hello')
