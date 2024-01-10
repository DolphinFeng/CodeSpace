const ChildProcess = require('child_process')

const { spawn, spawnSync } = ChildProcess

const pwd = spawnSync('pwd')  // pwd 拿到当前文件夹的绝对路径  windows系统: chdir
// ls 列出当前文件夹中所有的文件
console.log(pwd.stdout.toString())