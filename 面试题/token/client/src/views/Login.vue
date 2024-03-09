<template>
    <div>
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                    登录
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script setup>
// import axios from 'axios'
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { login } from '../api/user.js'

const router = useRouter()

const username = ref('')
const password = ref('') 

const onSubmit = (values) => {
    // console.log(values)
    // // 发请求 发请求 封装axios 或者ajax的fetch，vue官方推荐你用axios，很好用的库
    // axios.post('http://localhost:3000/login', values) // 希望后端有这么个地址，并向他传参 一定是个对象，刚好vant就是给你一个对象
    // .then(res => {
    //     console.log(res.data.token); // 后端返回的结果
    //     // 后端返回code: 0还是不够的，还需要一个token
    //     localStorage.setItem('token', res.data.token)
    //     router.push('/home') // 来到首页需要发接口请求，然后把token给到后端
    // })
    login(values).then(res => {
        console.log(res);
        localStorage.setItem('token', res.token)
        router.push('/home') // 来到首页需要发接口请求，然后把token给到后端
        // window.location.href = '/home' // 触发整个项目的重新刷新，
    })
}
</script>

<style lang="css" scoped></style>