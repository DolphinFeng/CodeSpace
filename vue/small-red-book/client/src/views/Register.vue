<template>
  <div class="login">
    <h1>注册</h1>
    <div class="login-wrapper">
      <div class="avatar">
        <img src="../assets/img/avatar.jpg" alt="">
      </div>

      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="state.nickname" type="nickname" name="昵称" label="昵称" placeholder="昵称"
            :rules="[{ required: true, message: '请填写昵称' }]" />
          <van-field v-model="state.username" name="用户名" label="用户名" placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="state.password" type="password" name="密码" label="密码" placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block type="success" native-type="submit">
            注册
          </van-button>
        </div>
      </van-form>

    </div>

    <p class="login" @click="login">已有账号？点击登录</p>
  </div>
</template>
  
<script setup>
import { reactive } from 'vue' // 数据源
import { useRouter } from 'vue-router'
import axios from '../api/index.js'
import { showSuccessToast } from 'vant';

const router = useRouter()  // 选项式api: this.$router 

const state = reactive({  // reactive将对象变成响应式  ref将原始类型变成响应式，其实ref也可以将对象变响应式，并且ref性能更好  
  username: '',
  password: '',
  nickname: '',
})

const onSubmit = async () => {
  const data = await axios.post('/register', {
    username: state.username,
    password: state.password,
    nickname: state.nickname
  })
  showSuccessToast(data.msg)
  setTimeout(() => {
    router.push('/login')
  }, 1500)
}

const login = () => {
  // 跳回登录页面
  router.push('/login')
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

  .login {
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

<style>
.van-cell__title.van-field__label {
  width: 45px;
}
</style>