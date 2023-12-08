- 顶级大厂需要看到实习生什么样的github页面
    - fork
        开源的力量
    - 给一个开源repo贡献代码

    - 思想切换
        前端 切到 后端
        DOM BOM
        I/O 数据库 network 服务器 api 文件系统 操作系统

    - 管家
        指令交给他
        向厨师，花匠……发号命令
        自动把任务完成 AutoGen
        管家就是UserProxyAgent
        initiateChat(
            assistant,
            message=""
        )
        执行代码

    - AssistantAgent
        通过大模型llm_config把Userr_proxy message 交给 openai 分析命令的意思
        自己编写代码的能力，把代码交给user_proxy执行，并检查结果

    - AutoGen 一堆Agent聊着聊着就把活给干了，不需要人的干预，只需授权
