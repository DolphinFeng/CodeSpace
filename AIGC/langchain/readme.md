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
