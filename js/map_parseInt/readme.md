# map + parseInt 经典题  23.11.25
    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt 看mdn中parseInt  两个参数：string, ?radix(string对应的进制) 默认10进制  0无效就是用10进制 如果对应不上就是NaN
    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map 看mdn中map 三个参数：item,index,arr map支持callback回调，每个元素都可以遍历到，返回一个新数组
    callback执行的时候接收到item,index,array本身，第一个参数一定要有，第二第三个可不用， parseInt就是当前的callback
    注意：面试的时候，哪怕很有把握也不能直接说出答案，慢慢讲，讲个10min，

# 云开发 laf.run
    - 集合
    集合就是一个数据表table  
        添加json数据
        标题：Laf云开发初体验 
            {
                "txt": "学习Laf",
                "done": false
            }       
        写一个和女朋友恋爱的网站

    - 函数
        http协议不同请求方法：
            get获取 
            post新增 这里不用勾选，用get就好，权限问题。
            put全部修改 
            patch部分修改 
            delete删除
        运行后获得一个地址：https://zc15la.laf.run/get-list
        yun\laf\todos\index.html中打印看看

        函数中用es6引库，模块化
        export async function main(){} 一个函数就是一个入口

        测试前需要发布

    - 存储
        创建 权限：公共读
        上传index.html
        开启网站托管 成功了，网址都可以打开了https://oss.laf.run/zc15la-todos/index.html

    如何做个人域名备案，腾讯云10元买一个 .cn  公安局备案  独立域名的项目