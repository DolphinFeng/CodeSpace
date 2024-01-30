<template>
	<view class="mine">

		<wyheader icon="more-filled" bgColor='transparent' :needBox="false">
			<template v-slot:content>
				<view>我的音乐</view>
			</template>
		</wyheader>
		
		<menuLeft></menuLeft>
		
		<view class="mine-bd">
			<view class="user">
				<view class="pic">
					<image src="../../static/logo.png" mode="aspectFill"></image>
				</view>
				
				<view class="user-online" v-if="isLogin">
					<view class="username">
						<text>冯都平</text>
					</view>
					<view class="user-desc">
						<view class="user-desc-horoscope">
							<text class="iconfont icon-1boy"></text>
							<text>90后</text>
							<text>射手座</text>
						</view>
						<view class="user-desc-address">
							<text>江西 南昌</text>
						</view>
						<view class="user-desc-age">
							<text>村岭7年</text>
						</view>
					</view>
					
					<view class="user-wyInfo">
						<view class="wyInfo-gz">
							<text>6</text> 关注
						</view>
						<view class="wyInfo-fs">
							<text>7</text> 粉丝
						</view>
						<view class="wyInfo-dj">
							<text>Lv.7</text> 等级
						</view>
						<view class="wyInfo-tg">
							<text>1888时</text> 听歌
						</view>
					</view>
					
					<view class="user-list">
						
					</view>
				</view>
				
				<view class="user-outline" v-else @click="login">
					<text>立即登录</text>
					<uni-icons type="right" size="16"></uni-icons>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'

const  store = useStore()

const isLogin = computed(() => {
	return store.state.loginState
})

const login = () => {
	uni.reLaunch({
		url: '/pages/login/login'
	})

}
</script>

<style lang="scss" scoped>
.mine-bd {
	padding: 280rpx 30rpx 40rpx;
	background-color: #93969d;
	.user {
		
		.pic {
			width: 120rpx;
			height: 120rpx;
			margin: 0 auto;
			
			image {
				border: 1rpx solid #fff;
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
		.user-outline {
			text-align: center;
			margin: 30rpx 0;
			color: #fff;
			:deep(.uni-icons) {
				color: #fff !important;
			}
		}
		.user-online {
			color: #fff;
			text-align: center;  // 里面的东西会继承
			.username {
				margin: 40rpx 0 16rpx 0;
				font-size: 40rpx;
				font-weight: 500;
			}
			.user-desc {
				// display: grid;
				// grid-template-columns: 1fr 1fr 1fr; // 1: 1: 1继承网格的宽度
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 26rpx;
				text {
					margin-left: 10rpx;
					&:first-child {
						margin-left: 0;
					}
					&.iconfont {
						color: #72939f;
					}
				}
			}
			.user-wyInfo {
				display: flex;
				justify-content: center;
				font-size: 24rpx;
				margin: 40rpx 0;
				color: #eee;
				view {
					margin-left: 40rpx;
					&:first-child {
						margin-left: 0;
					}
					text {
						font-size: 26rpx;
						color: #fff;
					}
				}
			}
		}
	}
}

</style>
