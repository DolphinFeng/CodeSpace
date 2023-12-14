1.git init 初始化本地仓库（让git掌管文件夹）

2.git status 查看该仓库中的文件状态

3.git add html 

  git add . 提交所有的文件到git暂存区

4.git commit -m '你的注释' 将暂存区的代码提交到master区

5.git push origin master 将文件推送到远程仓库

-test 


12.14 瑜导
1. git init 项目初始化带有本地仓库的项目
  - codesapce工作区
  - .git 隐藏文件夹，这也是代码仓库（有了这个才能帮我们存储文件）
2. 为何先add,再commit？
  步骤（带业务场景：在网易上班，写一个vue + langChain聊天功能）：
  1.py 
  2.vue 写界面
  多次git add 没关系，没有记录
  git add 1.py
  git add 2.vue
    add是放入到暂存区
  git commit -m ''
    这里不能乱写，写了就代表了完成了这些事情，一个上午一般提交三次左右，
    在公司里千万不写add .，会提交无关的东西
- 当我们在写代码时，有可能改到别人的代码或摸了会儿🐟，
这个时候先查看代码修改的文件 git status  返回当前仓库所有的状态
先git clone 再 git status
git diff 在add之前，再次确认改了哪些地方

  git add .\file1.txt
  git add file2.txt file3.txt

    git分布式体现在：本地，远程仓库，连接了该服务器的程序员的电脑同时分布在每个程序员电脑上（本地远程协作的方式）




   