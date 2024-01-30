<template>
	<view class="index">
		<wyheader>
			<!-- 将内容填充到名为content的插槽中 -->
			<template v-slot:content>
				<view class="search">
					<uni-search-bar placeholder="歌曲"></uni-search-bar>
				</view>
			</template>
		</wyheader>
		
		<!-- menu -->
		<menuLeft />

		<!-- banner -->
		<view class="banner">
			<swiper 
			:indicator-dots="true" 
			:autoplay="true" 
			:interval="3000" 
			:duration="1000" 
			circular="true" indicator-color="#eee" indicator-active-color="#d81e06">
				<swiper-item v-for="item in state.banners" :key="item.encodeId">  
					<view class="swiper-item">
						<image :src="item.pic" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- balls -->
		<view class="balls">
			<view class="ball-item" v-for="item in state.balls" :key="item.id">
				<view class="icon">
					<image :src="item.iconUrl" mode="aspectFill"></image>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
		
		<!-- 专属推荐 -->
		<songList :list="state.recommendList" title="推荐歌单"/>
		<!-- 推荐歌曲 -->
		<recommendSong :list="state.recommendSongs"/>
		<!-- 雷达歌单 -->
		<songList :list="state.personalizedList" title="Dolphin的雷达歌单"/>
	</view>
</template>

<script setup>
import { apiGetBanner, apiGetBall, apiGetRecommendList, apiGetRecommendSongs, apiGetPersonalizedList } from '@/api/index.js'  // @代表项目根目录
import { onLoad } from '@dcloudio/uni-app'  // 包不用你去下载
import { reactive } from 'vue';

const state = reactive({
	banners: [],
	balls: [],
	recommendList: [],
	recommendSongs: [],
	personalizedList: [],
})

onLoad(() => {  // 不喜欢在生命周期中写过多的代码
	getRecommendList()
	getBanner()
	getBall()
	getRecommendSongs()
	getPersonalizedList()
})

const getBanner = () => {
	apiGetBanner({type: 2}).then(res => {
		// console.log(res.data.banners)
		state.banners = res.data.banners
	})
}

const getBall = async() => {
	const { data: { data: balls } } = await apiGetBall()
	// console.log(balls)
	state.balls = balls
}
// 推荐歌单
const getRecommendList = async() => {
	const { data: { recommend: recommend } } = await apiGetRecommendList()
	// console.log(recommend)
	state.recommendList = recommend
}
// 推荐歌曲
const getRecommendSongs = async() => {
	const res = await apiGetRecommendSongs()
	// console.log(res.data.data.dailySongs)
	state.recommendSongs = res.data.data.dailySongs
}
// 雷达
const getPersonalizedList = async() => {
	const res = await apiGetPersonalizedList()
	console.log(res.data.result)
	// state.recommendSongs = res.data.data.dailySongs
	state.personalizedList = res.data.result
}
</script>

<style lang="scss" scoped>
.index {
	padding: 0 20rpx;
	.search {
		width: 500rpx;
		height: 60rpx;
		:deep(.uni-searchbar){  // 穿透样式
			height: 100%;
			padding: 0;
			.uni-searchbar__box{
				padding: 0;
			}
		}
	}
	.banner {
		.swiper-item{
			width: 740rpx;
			margin: 0 5rpx;
			height: 100%;
			overflow: hidden;
			image {
				width: 740rpx;
				height: 100%;
				border-radius: 10rpx;
			}
		}
	}
	.balls {
		display: flex;
		overflow-x: scroll;
		margin: 30rpx 0;
		.ball-item {
			flex: 0 0 20%;
			font-size: 20rpx;
			text-align: center; // 父容器中给非块级元素居中
			.icon {
				width: 70rpx;
				height: 70rpx;
				margin: 0 auto; // 块级元素水平居中
				margin-bottom: 10rpx;
				background-color: $uni-primary-color;
				border-radius: 50%;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	
}
</style>
