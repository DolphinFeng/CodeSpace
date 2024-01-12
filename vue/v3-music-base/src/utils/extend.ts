// 流程代码 -> 封装 js工具
import { useNumberFormat } from './number'  

Number.prototype.numberFormat = function (digit = 2) {  // 项目亮点: 清晰的项目架构，什么文件夹放什么 vue全家桶+ts
    return useNumberFormat(this)
}