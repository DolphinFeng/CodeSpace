# 机器学习任务
transformers huggingface的核心库
- pipeline 分发任务
    pipeline(task, model)
- 数组和hashTable|Dict
    - 相同点
       数据容器 分为 线性 | 非线性
    - 区别
        数组，Dict和栈 队列 链表  区别在于连续（eg.数组）和不连续，指的是内存空间，
        非线性 树 图
        查找线性容器里 
- transformers 支持哪些nlp任务
    SUPPORTED_TASKS 常量
    items 值是一个Dict JS JSON
    for k,v in
CPU的加法运算最快，for技术循环最快    for in   for of
图解HTTP协议这本书可以读下，很薄
计算机组成原理（想要面试字节得话）
- 读/写 操作系统 I/O
Output 硬盘
    同步代码 I/O操作  从远程切换到内存|硬盘中，涉及到网络传输的耗时的任务
    for() ms 结束 多进程切换 轮循
    img = Image.open(requests.get(url,))会进行阻塞
    - request 网络请求
    request.get(url, stream=True).raw
    get是http 明文请求 的方法
    method="post" 提交表单
    - PIL库 图片的读写等...
       Image