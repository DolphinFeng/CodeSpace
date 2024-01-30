<template>
	<view class="login">
		<view class="logo">
			<image src="../../static/icon/reddiscover.png" mode="aspectFill"></image>
		</view>
		<view class="login-body">
			
			<view class="qrimg">
				<text v-if="qrimg">{{msg}}</text>
				<view class="login-img">
					<image v-if="qrimg" :src="qrimg" mode=""></image>
				</view>
			</view>
			
			<view class="start">
				<view class="traveler" @click="goIndexPage">
					立即体验
				</view>
				<view class="qr-login btn" @click="qrLogin">
					扫码登陆
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import baseUrl from '@/api/request.js'
import { useStore } from 'vuex'

const store = useStore()

const isQr = ref(false)
const goIndexPage = () => {
	uni.reLaunch({
		url: '/pages/index/index'
	})
}

let msg = ref('扫一扫')
let qrimg = ref('')  

const qrLogin = () => {
	uni.request({  // key
		url: `${baseUrl}/login/qr/key?timestamp=${Date.now()}`,
		success: (res) => {
			// console.log(res.data.data.unikey)
			let key = res.data.data.unikey
			uni.request({  // 图片
				url: `${baseUrl}/login/qr/create?key=${key}&qrimg=true&timestamp=${Date.now()}`,
				success: (result) => {
					console.log(result.data.data.qrimg)
					qrimg.value = result.data.data.qrimg
					const timmer = setInterval(() => {  // 检验二维码状态
						uni.request({
							url: `${baseUrl}/login/qr/check?key=${key}&timestamp=${Date.now()}`,
							success: (response) => {
								console.log(response)
								msg.value = response.data.message
								if (response.data.code === 803) {
									msg.value = response.data.message
									clearInterval(timmer)
									uni.setStorageSync('cookie', response.data.cookie) // 把cookie本地存储
									store.commit('changeLoginState', true) // 修改仓库状态
									getApp().getUser(response.data.cookie) // getApp()就是获取App.vue中的方法
									uni.reLaunch({ // 跳页面
										url: '/pages/index/index'
									})
								} 
							}
						})
					}, 1000)
				}
			})
		}
	})
}
</script>

<style lang="scss">
.login {
	height: 100vh;
	position: relative;
	background: linear-gradient(#f9ebeb, #fff);
	.logo {
		height: 150rpx;
		width: 150rpx;
		position: absolute;
		top: 200rpx;
		left: 50%;
		margin-left: -75rpx;
		image {
			width: 100%;
			height: 100%;
			
		}
	}
	.login-body {
		position: absolute;
		top: 400rpx;
		left: 50%;
		transform: translateX(-50%);
		.qrimg {
			text-align: center;
			.login-img {
				width: 400rpx;
				height: 400rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			
		}
		.start {
			margin-top: 50rpx;
			display: flex;
			justify-content: space-between;
		}
	}
}
</style>
