<template>
  <div class="login">
    <h1>登录</h1>
    <div class="login-wrapper">
      <div class="avatar">
        <img src="../assets/img/avatar.jpg" alt="">
      </div>

      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="state.username" name="用户名" label="用户名" placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="state.password" type="password" name="密码" label="密码" placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button color="#ff2442" round block native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>

    </div>

    <p class="register" @click="register">新用户？ 点击这里注册</p>
  </div>
</template>
  
<script setup>
import { reactive } from 'vue' // 数据源
import { useRouter } from 'vue-router'
import axios from '../api/index.js'

const router = useRouter()  // 选项式api: this.$router 

const state = reactive({  // reactive将对象变成响应式  ref将原始类型变成响应式，其实ref也可以将对象变响应式，并且ref性能更好  
  username: '',
  password: '',
})

const onSubmit = async() => {
  // 拿到用户名，密码给后端发请求
  const res = await axios.post('/login', {
    username: state.username,
    password: state.password,
  })
  console.log(res)
  // 保存用户信息
  sessionStorage.setItem('userInfo', JSON.stringify(res.data))
  router.push('/userProfile')
}

const register = () => {
  // 跳注册页面
  router.push('/register')
}
</script>
  
<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: white;
  padding: 0 0.3rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;

  h1 {
    text-align: center;
    height: 0.6933rem;
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
      margin: 1rem auto 0.77rem; // 左右居中

      img {
        width: 100%;
      }
    }
  }
  .register {
    position: absolute;
    font-size: 0.374rem;
    left: 50%;
    transform: translateX(-50%);
    line-height: 0.6rem;
    bottom: 30px;
    width: 80%;
    text-align: center;
    height: 0.6rem;
    color: rgba(18, 18, 18, 1);
  }
}
</style>
<!-- 更改vant输入框的宽的，不能在scoped中，因为这是全局样式 -->
<style>
.van-cell__title.van-field__label {
  width: 45px;  
}
</style>