// // app.js
// App({
//   onLaunch() {
//     // 展示本地存储能力
//     const logs = wx.getStorageSync('logs') || []
//     logs.unshift(Date.now())
//     wx.setStorageSync('logs', logs)

//     // 登录
//     wx.login({
//       success: res => {
//         // 发送 res.code 到后台换取 openId, sessionKey, unionId
//       }
//     })
//   },
//   globalData: {
//     userInfo: null
//   }
// })

App({
  globalData: {

  },
  onLaunch() {
    // 在应用启动时，发送接口请求
    // console.log('应用启动了');
    // 发送一个远程请求
    wx.request({
      url: 'http://resources.ninghao.net/wxapp-case/db.json',
      success: (response) => {
        // console.log(response);
        // 全新的new方式
        // 前后端接口链条
        Object.assign(this.globalData, response.data)
        // console.log(this,'-----');
      }
    })
  }

})