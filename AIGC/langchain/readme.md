# LangChain
- OpenAi
    getComletion封装方法（调用接口的方法）
- 现在用得最多的AI框架
    标准化LLM开发流程
    简化LLM开发
    LLM随时换模型
    (outChain是未来的，langchain是现在的)

- 开发AI应用
    更多聚焦于业务，快速开发

- 聊天工具 业务

1. !pip install langchain==0.0.316 // 这个是极简AI开发框架
    0.0.316
    第一个是大版本，正式版本 第二个是部分内容的更新，第三个版本号可能是改了bug，0.0.316说明还是开发阶段，如果到了1.0.0出了问题就要负商业责任 
2. !pip install openai==0.28.1 // 最新openai-1.3.9版本，说明需要负商业责任

3. from langchain.chat_models import ChatOpenAI // langchain.chat_models是个接口，引入一个聊天的模型  
   from langchain.schema import HumanMessage // schema概要   分为三种角色：system(规定做什么)，assistant(助理)，user(human)   我们把问题传给HumanMessage  
   import os // 引入文件系统
   os.environ['OPENAI_API_KEY'] = '' // 设置环境变量，langChain会自动来拿
   chat = ChatOpenAI(temperature=0, model_name="gpt-3.5-turbo") // 实例化对象，面向对象编程  temperature是自由度
   response = chat([HuamnMessage(content="Hello LangChain!")]) // 给聊天对象传递一个数组  HumanMessage是角色，对面是system角色
   print(response)

   这里有个问题，如果安装openai没有指明版本就会报错，必须用老版本才可以用，如果这个bug是你发现的，你可以成为一个contributer
   

LangChain如何优化OpenAI开发的
    这里以只能聊天为例

- 如何向开源项目提交代码
1. fork到自己的本地仓库
    来到自己的仓库，这样才有提交权限
2. 发现了人家的bug，或者人家需要我们做的job
    把活干完，并且完成测试
    add commit 并且push
3. 提交到我们自己的远程仓库
4. 点进这次提交，然后create pull request 
    然后去描述问题，怎么解决的，截图，最后提交
5. 远程仓库的代码就会比人家的仓库多点东西，人家就会收到合并代码的请求，人家去check，merge到自己的仓库，然后自己就会成为一个开发者，contributer就会有自己的头像，这就是开源的魅力

- AI或Laf类  
    AI还有很多问题   Laf用来写后端
- 翻译
    很多AI文章都没有翻译引入国内
- 合作
    

可以在vscode中打开指定的路径下打开终端
git clone https://github.com/sugarforever/wtf-langchain.git
如果失败也可以去下载解压包
失败可能是因为你用得是gitee之前，我们可以临时导入，
git config --global user.name"DolphinFung"
git config --global user.name"2292241828@qq.com"
git clone https://github.com/sugarforever/wtf-langchain.git


git add .\01_Hello_Langchain\README.md
git commit -m 'openai新版本不兼容，指定版本回退'
git push origin main
然后去Create Pull requests
给个建议： fixed openai version bug
然后提交的请求可以到那边去，这就相当于做了一个贡献
OpenAI新版本更新后，与LangChain的0.0.235版本不兼容，报错

1.11 
# AIGC 方向
    文字生成sql
传统方向能走，但是难一点
- GPTs 应用商店正式发布 找到一家有AIGC思维的公司加入
    AI电商  电商型的项目

- python 
    - LangChain 
    - 后端 Flask框架 也是后端框架

- 生成代码 开发提效
    - Copilot
    - SQL 如何生成及分析


import sqlite3 #轻量的关系型数据库，大佬一般在测试产品想法的时候用这个
               # python自带数据库，不用安装

conn = sqlite3.connect('FlowerShop.db') # 数据库文件，放在当前目录下  这是数据库连接句柄

cursor = conn.cursor()   游标对象 走到哪执行哪

cursor.execute('''    sqlite完全支持三大范式
  CREATE TABLE FLOWERS( 
    ID INTEGER PRIMARY KEY,  字段
    Name TEXT NOT NULL,  花名用的text文本类型
    Source TEXT NOT NULL,
    PurchasePrice REAL,
    SalePrice REAL,
    StockQuantity INTEGER,
    SoldQuantity INTEGER,
    ExpiryDate DATE,
    Description TEXT,
    EntryDate DATE DEFAULT CURRENT_DATE
  )
''') 执行sql

flowers = [ ('Rose', 'Flower', 'France', 1.2, 2.5, 100, 10, '2023-12-31', 'A beautiful red rose'), ('Tulip', 'Flower', 'Netherlands', 0.8, 2.0, 150, 25, '2024-12-31', 'A colorful tulip'), ('Lily', 'Flower', 'China', 1.5, 3.0, 80, 5, '2023-12-31', 'An elegant white lily'), ('Daisy', 'Flower', 'USA', 0.7, 1.8, 120, 15, '2023-12-31', 'A cheerful daisy flower'), ('Orchid', 'Flower', 'Brazil', 2.0, 4.0, 50, 2, '2023-12-31', 'A delicate purple orchid')]
这里就是假数据

for flower in flowers:   循环执行
  cursor.execute('''
    INSERT INTO Flowers(Name, Type, Source, PurchasePrice, SalePrice, StockQuantity, SoldQuantity, ExpriyDate, Desciption)
    values(?,?,?,?,?,?,?,?,?);
  ''', flower)

  conn.commit() # 事务 要有回滚的能力

  conn.close() 关闭释放理解对象 安全 为了减少线程数 数据库可以高并发的，但是也有上限

python非常适合数据开发，sqlite拥有和sql一样的能力，但是差一点

- SQL 不是查询或数据分析的必需了
    AIGC 深层次能力
    LLM可以用自然语言处理，可以生成sql语句，拿到sql后，还可以用sql agent运行sql查询

- 新的数据库查询范式
    - 用户|小编|老板|产品经理|技术实施 提出问题
    - chatgpt 自然语言处理能力 生成sql，新手快速上手
    - 自动执行sql 并拿到查询结果 AI应用 AI Agent LangChain
        mpv4去用node写sql
    - 根据用户的需求，生成json还是图表
    - 得到答案
可以让任何人都拥有数据分析的能力

Agent：就是一个机器人，可以帮你执行任务
有没有开发过agent 就是这个数据库agent， 传统需要写一堆代码，现在只要开发一个数据库agent 它代理用户 大模型 数据库进行三方的交流

from langchain.utilities import SQLDatabase 
langchain里面也有一个utilities 工具库

from langchain.utilities import SQLDatabase # langchain让用户和大模型连接起来 还能连数据库
from langchain.llms import OpenAI
from langchain_experimental.sql import SQLDatabaseChain

db = SQLDatabase.from_uri("sqlite:///FlowerShop.db")  // ///表示协议
llm = OpenAI(temperature=0, verbose=True, api_key="")
db_chain = SQLDatabaseChain.from_11m(llm, db, verbose=True)  连接起来
langchain提供了各种chain

