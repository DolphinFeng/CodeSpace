const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 否则起名字要求很严格，App1.vue就不让，配置文件改完需要重启
})
