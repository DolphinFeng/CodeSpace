# 小程序外包

- 小程序项目是当下最流行的线上线下结合程序

    线上线下结合：外卖（app起家，是移动时代的红利（因为手机上有GPS Location Base Service LBS应用））
                 陌陌 也是LBS应用
- 小程序  之所以外包多，是因为适合中小商家  小程序救活了一群的程序员
    因为他让线下的实体店，立马线上化，软件化
    产品经理会考你：O2O Offline to Online 
    小程序还有个好处是不用安装，轻量化，网费不看重了，扫码就能用了

# 汽车4s店小程序开发
    如果寒假能够有个远程实习，春招之前大概率拿到offer

- 商业级别的中小型外包程序，需要什么样的开发能力？

- 小程序开发约定（很简单）：架构思路
    - pages 概念
        - 由页面构成
        wxml（微信定制的xml，没有div，只有view）就是html html也是xml的一种，xml的经典代表就是json
        json就是对象字面量，前端向后端请求的数据，后端返回前端的也是json --- 数据交换标准
        wxss 就是 css
        js 负责交互和数据管理    Ajax（负责网络七个球，向后端发送，手机就是客户端，数据在服务器上），fetch（），五年前go很牛
        json 是一个配置文件，配置页面标题啥的
        毕业论文就可以由小程序写，1000元一个
        GPTs未来会取代苹果的应用市场
        xml是json的数据交换标准

        {   
            name: '小黑子',
            age: 19
        }
        下面是早期的表示方式，数据的交换标准，不过华为又在用这个。标志就是开闭标签，适用于document的数据格式
        <reviewer>
            <name>小黑子</name>
            <age>19</age>
        </reviewer>
        - 切图崽

    - app.json 
        app开头的都是全局的，比page更大,是所有的页面共享的
        一个页面四个文件
        app.css所以也是全局的
        武汉成都很多招远程实习
        这里的按钮的点击时间是bindtap,非onclick,addEventListener
        江西省外包大赛，结合一个后端选手
讲了三个LBS O2O MVVM
    - 数据驱动界面思想 MVVM
        - 可以在js里配置一个data区域
        {{数据绑定 占位符 info.name}}  数据绑定
        wxml---模板 （静态页面 数据浇灌） 
        data 模板数据
        页面 = 模板 + 数据
        数据改变，模板就会重新编译，显示新的页面
        wx提供了功能丰富的组件（标签），swiper轮播图

- 优质项目开发思路
    - wxml有着html不具备的组件，比如image非img,swiper快速实现幻灯片
        直接看文档https://www.w3cschool.cn/weixinapp/weixinapp-swiper.html
        一个类名负责一件事，方便复用
    - css开发将我们的样式按照原子功能，进行封装，有利于未来项目的复用
        - 当你发现你在重复写样式的时候
            white hero section
            一行或几行css 形成了一个功能模块
            .sub-header {
                font-size:;
                line-height:;
                font-family:;
            } 
        - 慢慢积累经验


        11.15
        App({})中{}是配置
        App -> Page的桥梁