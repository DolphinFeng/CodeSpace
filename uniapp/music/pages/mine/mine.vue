<template>
	<scroll-view scroll-y="true" class="mine" @scroll="handleScroll" data-mine="mineWrap">

		<wyheader icon="more-filled" :bgColor='headerBgColor' :needBox="false" :fontColor='headerFontColor'>
			<template v-slot:content>
				<view>我的音乐</view>
			</template>
		</wyheader>
		
		<menuLeft></menuLeft>
		
		<view class="mine-bd">
			<view class="bg" :style="{backgroundImage: `url(${userInfo.profile && userInfo.profile.backgroundUrl})`}"></view>
			<view class="user">
				<view class="pic">
					<image :src="userInfo.profile && userInfo.profile.avatarUrl" mode="aspectFill"></image>
				</view>
				
				<view class="user-online" v-if="isLogin">
					<view class="username">
						<text>{{userInfo.profile && userInfo.profile.nickname}}</text>
					</view>
					<view class="user-desc">
						<view class="user-desc-horoscope">
							<text class="iconfont icon-1boy"></text>
							<text>{{formateTime(userInfo.profile && userInfo.profile.birthday).ageLever}}后</text>
							<text>{{formateTime(userInfo.profile && userInfo.profile.birthday).horoscope}}座</text>
						</view>
						<view class="user-desc-address">
							<text>江西 南昌</text>
						</view>
						<view class="user-desc-age">
							<text>村岭{{ ~~(userInfo.createDays / 365)}}年</text>
						</view>
					</view>
					
					<view class="user-wyInfo">
						<view class="wyInfo-gz">
							<text>{{userInfo.profile && userInfo.profile.follows}}</text> 关注
						</view>
						<view class="wyInfo-fs">
							<text>{{userInfo.profile && userInfo.profile.followeds}}</text> 粉丝
						</view>
						<view class="wyInfo-dj">
							<text>Lv.{{userInfo.level}}</text> 等级
						</view>
						<view class="wyInfo-tg">
							<text>{{userInfo.listenSongs}}时</text> 听歌
						</view>
					</view>
					
					<view class="user-list">
						<view class="zj btn">
							<text class="iconfont icon-zuijinlaifang"></text>
							<text class="text">最近</text>
						</view>
						<view class="bd btn">
							<text class="iconfont icon-xiazai"></text>
							<text class="text">本地</text>
						</view>
						<view class="yp btn">
							<text class="iconfont icon-shangchuanyunpan"></text>
							<text class="text">云盘</text>
						</view>
						<view class="yg btn">
							<text class="iconfont icon-yigou"></text>
							<text class="text">已购</text>
						</view>
						<view class="more btn">
							<text class="iconfont icon-bendifenlei"></text>
						</view>
					</view>
				</view>
				
				<view class="user-outline" v-else @click="login">
					<text>立即登录</text>
					<uni-icons type="right" size="16"></uni-icons>
				</view>
				
			</view>
			
			<view class="list">
				<view class="nav">
					<view class="nav-item" @click="changeNav(index)" :class="{'active': activeNum === index}" v-for="(item, index) in listNav" :key="index">
						{{item}}
					</view>
				</view>
				
				<view class="list-sort">
					<view class="tab" v-if="showTab[0]">
						<view class="sort-item" v-for="item in sort_playlist" :key="item.id" @click="goSongsList(item.id)">
							<view class="pic">
								<image :src="item.coverImgUrl" mode="aspectFill"></image>
							</view>
							<view class="desc">
								<view class="title">
									{{item.name}}
								</view>
								<view class="detail">
									<text v-if="item.specialType == 0">歌单</text>
									<text>{{item.trackCount}}首</text>
									<text v-if="item.specialType > 0">{{item.playCount}}播放</text>
									<text v-if="item.specialType == 0">{{item.creator.nickname}}</text>
								</view>
							</view>
						</view>
					</view>
					
					<view class="tab" v-if="showTab[1]">
						播客
					</view>
					
					<view class="tab" v-if="showTab[2]"> 
						动态
					</view>
					
				</view>
			</view>
		</view>
		
		<!-- 播放器 -->
		<musicPlayer bottom="100rpx" />
	</scroll-view>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex'
import { apiGetUserInfo, apiGetUserSongsList } from '@/api/mine.js'
import { onLoad } from '@dcloudio/uni-app' 
import { formateTime } from '@/utils/index.js'

const  store = useStore()
const userInfo = ref({})
const activeNum = ref(0)
const listNav = ['音乐', '博客', '动态']
const nav_bottom = ref(750 / 3 / 2 + 'rpx')
const sort_playlist = ref([])
const headerBgColor = ref('rgba(255, 255, 255, 0)')
const headerFontColor = ref('rgba(255, 255, 255, 1)')
const showTab = ref([true, false, false])

const isLogin = computed(() => {
	return store.state.loginState
})

const login = () => {
	uni.reLaunch({
		url: '/pages/login/login'
	})
}

// onLoad(() => {
// 	getUserInfo()
// })

// 获取用户信息
const getUserInfo = async() => {
	const res = await apiGetUserInfo(store.state.userInfo.userId)  // 传入用户uid
	// console.log(res.data)
	userInfo.value = res.data
}

// 获取用户歌单
const getUserSongsList = async() => {
	const res = await apiGetUserSongsList(store.state.userInfo.userId)
	// console.log(res.data.playlist)
	sort_playlist.value = res.data.playlist
}

watch(() => store.state.userInfo.userId, (newVal, oldVal) => {  // watch第三个参数立即执行
	// console.log(newVal, oldVal)
	if (newVal) {
		getUserInfo()
		getUserSongsList()
	}
}, { immediate: true })

const changeNav = (index) => { // 0 1 2  ->  1 3 5
	activeNum.value = index
	nav_bottom.value = 750 / 3 / 2 * (2 * index + 1) + 'rpx'
	
	showTab.value = [false, false, false]
	showTab.value[index] = true
}

let bgOpacity = 0
let fontColor = 255

const handleScroll = (e) => {
	// console.log(e.detail.scrollTop)
	let top = e.detail.scrollTop

	if (top <= 340) {
		bgOpacity = (top / 340).toFixed(2)// 保留一位小数 
	} else {
		bgOpacity = 1
	}

	if (top >= 200) {
		fontColor = 0
	} else {
		fontColor = 255
	}

	headerBgColor.value = `rgba(255, 255, 255, ${bgOpacity})`
	headerFontColor.value = `rgba(${fontColor}, ${fontColor}, ${fontColor})`
}

const goSongsList = (id) => {
	uni.navigateTo({
		url: `/pages/songsList/songsList?id=${id}`
	})
}
</script>

<style lang="scss" scoped>
.mine {
	height: 100%;
}
.mine-bd {
	height: 100%;
	box-sizing: border-box;
	padding: 280rpx 30rpx 80rpx;
	position: relative;
	.bg {
		height: 800rpx;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		background-color: #93969d;
		background-size: cover;
		z-index: -1;
	}
	.user {
		min-height: 400rpx;
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
			.user-list {
				display: grid;
				grid-template-columns: 2fr 2fr 2fr 2fr 1fr;
				grid-column-gap: 10rpx;
				.btn {
					padding: 10rpx 0;
					font-size: 26rpx;
					background-color: rgba(255, 255, 255, 0.1);
					border-radius: 10rpx;
					.iconfont {
						font-size: 26rpx;
						margin-right: 4rpx;
					}
				}
			}
		}
	}
	.list {
		position: relative;
		top: -30rpx;
		background-color: #fff;
		margin-left: -30rpx;
		margin-right: -30rpx;
		margin-top: 80rpx;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		.nav {
			border-top-left-radius: 15px;
			border-top-right-radius: 15px;
			display: flex;
			position: -webkit-sticky;
			position: sticky;
			top: 100rpx;
			background-color: #fff;
			z-index: 999;
			.nav-item {
				flex: 1;
				text-align: center;
				padding: 30rpx 0;
				color: #666;
				&.active {
					color: #000;
					position: relative;
					}
				}
			&::after {
				content: '';
				display: block;
				width: 30rpx;
				height: 6rpx;
				background-color: $uni-primary-color;
				position: absolute;
				// left: calc(750rpx / 3 / 2 * 5); // 分成了六等分1 3 5 
				left: v-bind(nav_bottom);
				transform: translateX(-50%);
				bottom: 15rpx;
				border-radius: 20rpx;
				transition: left 0.2s ease; // 控制其他css属性发生变更的时间
			}
		}
		.list-sort {
			padding: 40rpx 30rpx;
			.sort-item {
				display: flex;
				align-items: center;  // y居中
				margin-bottom: 20rpx;
				.pic {
					width: 100rpx;
					height: 100rpx;
					margin-right: 20rpx;
					image {
						width: 100%;
						height: 100%;
						border-radius: 16rpx;
					}
				}
				.desc {
					.title {
						color: #3d4251;	
						font-size: 28rpx;
					}
					.detail {
						color: #6e747b;
						font-size: 22rpx;
						text {
							&::after {
								content: '·';
								margin: 0 4rpx;
							}
							&:last-child::after {
								content: '';
							}
						}
					}
				}
			}
		}
	}
}

</style>
