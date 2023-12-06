<template>
    <div class="login">
        <!-- 用optionapi -->
        <div class="login-wrap">
            <div class="item">
                <!-- span是行内元素，所以同一行了 -->
                <span>账号：</span>
                <input type="text" v-model="account">
            </div>
            <div class="item">
                <span>密码：</span>
                <input type="text" v-model="password">
            </div>
            <div class="item">
                <button @click="login">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                // v-model 可以双向绑定 实时把内容记录到数据源中  写好后input框中也会有
                account: 'admin',
                password: '123456',
            }
        },
        methods: {
            login() {
                // console.log(this.account);
                // console.log(this.password)
                // console.log(登录成功);
                // 获取用户输入的账号密码，再发起请求传给后端

                // 账号密码不能为空
                if(this.account === '' || this.password === ''){
                    // 弹出一个框，这里时间原因用了最捞的alert
                    alert('账号密码不能为空')
                    return
                }
                // 加了return 就不用else 工作用正则账号，正则密码校验
                // 正常来说是ajax一个后端请求，这里模拟一下，跳转页面
                // 用js来实现跳转页面，router-link是css跳转
                // console.log(this.$router);
                // this代表vue的实例对象 为什么vue会有$router，因为main.js中  createApp(App).use(router) 有个use

                // this.$router.push(`/home/${this.account}`) 第一种
                // this.$router.push({path: '/home', query: {user: this.account}}) 第二种
                this.$router.push({name: 'home', params: {user: this.account}})
                // this.$router.push({path: '/home', hash: `#${this.account}`}) 第四种
            }
        }
    }
</script>

<style lang="less" scoped>

.login {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center; // 主轴居中 
    align-items: center;
    // justify-content align-items都是弹性才能用的
    background-color: antiquewhite;
    // 写100%，不知道继承谁的容器，写vh
    // 嵌套写法: 减少了命名时词汇量少的麻烦
    .login-wrap{
        width: 400px;
        height: 300px;
        // border: 1px solid black;
        background: wheat;
        border-radius: 10px;
        // x偏移 y偏移 扩散 颜色
        box-shadow: 0 0 100px #bb8787;
        // 内边距
        padding: 20px;
        // 这样时默认的标准模式，会撑开整个容器，440
        // 加一个IE模式
        // box-sizing: border-box;
        font-size: 30px;
        // input是wrap的子元素，就可以这样套
        .item{
            display: flex;
            margin-top: 20px;
            input{
                // input是行内块元素，可以设置宽高
                // flex: 1没效果，除非父容器也是弹性容器，这里div是父容器  让input要1等分
                // 弹性容器会让子容器撑满
                flex: 1;
                padding: 0 10px;
                // 输入字体变大点好看
                font-size: 20px;
                border-radius: 8px;
                border: none;
            }
            button{
                font-size: 30px;
                flex: 1;
                // px单位写100 1000都可以，两边是圆形
                border-radius: 1000px;
                border: none;
                background-color: rgb(121, 98, 203);
                // 改字体颜色
                color: white;
                // padding: 上下 左右  刚好把button撑开
                padding: 5px 0;
                // 鼠标变成小手
                cursor: pointer;
            }
        }
        
    }   
}

</style>