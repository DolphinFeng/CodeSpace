<template>
    <div class="login">
        <h1>注册</h1>
        <div class="login-wrapper">
            <div class="avatar">
                <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.Oiu3YQAgT27hBMQMZaw_PwAAAA?w=220&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="">
            </div>

            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="state.nickname" name="昵称" label="昵称" placeholder="昵称"
                        :rules="[{ required: true, message: '请填写昵称' }]" />
                    <van-field v-model="state.username" name="用户名" label="用户名" placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field v-model="state.password" type="password" name="密码" label="密码" placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block color="#7232dd" native-type="submit">
                        注册
                    </van-button>
                </div>
            </van-form>

        </div>
        <p class="register" @click="login">已有账号？点击登录</p>
    </div>
</template>

<script setup>
// setup更灵活
import { useRouter } from 'vue-router' // 钩子hooks函数
import { reactive } from 'vue' // reactive
// data用得上用不上都需要写上，reactive响应式，不用就不写，将对象变成响应式
// reactive负责把多个引用类型变成响应式，通常ref负责把原始类型变成响应式 
const router = useRouter() // this.$router.push相当于 现在就是router.push()

const state = reactive({
    username: '',
    password: '',
    nickname: '',
})

const onSubmit = () => {
    // 发请求将state.username, state.password发给后端
    // ... 
    console.log(state.username, state.password)
}

const login = () => {
    // 跳路由 需要引入
    router.push('/login')
}

// const username = ref('') 
// const password = ref('')
// ref， reactive爱用哪个用哪个  ref性能会更高
</script>

<style lang="less" scoped> // 私有样式无法更改全局
.login {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    padding: 0 0.3rem;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;

    h1 {
        height: 0.6933rem;
        text-align: center;
        margin-top: 1.12rem;
        font-size: 0.48rem;
    }

    .login-wrapper {
        width: 7.44rem;
        height: 10.77rem;
        border: 1px solid rgba(187, 187, 187, 1);
        margin: 0 auto;
        margin-top: 1.7rem;
        border-radius: 0.3rem;
        box-shadow: 0 0 0.533rem 0 rgba(170, 170, 170, 1);

        .avatar {
            width: 2.4rem;
            height: 2.4rem;
            overflow: hidden;
            border-radius: 50%;
            margin: 1rem auto 0.77rem;

            img {
                width: 100%;
            }
        }
    }

    .register {
        position: absolute;
        bottom: 30px;
        width: 80%;
        left: 50%;
        text-align: center;
        font-size: 0.374rem;
        transform: translateX(-50%);
        height: 0.6rem;
        line-height: 0.6rem;
        color: rgba(16, 16, 16, 1);
    }
}
</style>

<style>
.van-cell__title.van-field__label{
    width: 45px;
}
</style>