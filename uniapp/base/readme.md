# 生命周期
- vue 自带的生命周期在uniapp中都能使用，vue的生命周期只是用来作页面的，uniapp需要应用端

# 页面生命周期
uniapp 提供了 页面生命周期，比如上拉加载，下拉刷新，页面渲染完成。。。钩子函数

# 应用生命周期
// [应用生命周期](https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle)
	整个app应用的状态变化，只在App.vue中使用
1. onLaunch: 应用打开时触发的
2. onShow: 后台进入前台触发
3. onHide: 前台进入后台
4. onThemeChange: 主题色变化

uniapp下有很多引擎，比如vue3引擎不会读ifndef  而是读ifdef
[假接口](https://mock.presstime.cn/) 不想写后端，可以用这些来写接口，然后数据可以去fastmock 数据可以去mockjs去随机
通用单位为 rpx 像素单位
去设置-语言服务配置-rpx-px 设计稿为750像素 就是1  如果是 375像素就是0.5   反正就是  倍数 = x/750  

# 全局变量
1. Vue.prototype.name = '测试名称'  // optionsAPI才可以这样用
2. 在App.vue中设置
```
globalData: {
	name: '全局'
}
```
3. Vuex 

# 图标
不建议使用在线链接  怕人家离线使用
去下载iconfont阿里巴巴 放到common中
在App.vue的style中引入iconfont.css