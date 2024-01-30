<template>
	<view class="recommend-song">
		<view class="recommend-hd">
			<view class="title">
				推荐歌曲
			</view>
			<view class="more">
				<uni-icons type="right" size="10"></uni-icons>
			</view>
		</view>
		<swiper class="swiper-wrap">
			<swiper-item v-for="item in swiperList">
				<view class="swiper-item" v-for="song in item">
					<view class="song-item">
						<view class="song-detail">
							<view class="pic">
								<image :src="song.al.picUrl" mode="aspectFill"></image>
							</view>
							<view class="desc">
								<view class="name">
									{{song.al.name}}
								</view>
								<view class="author">
									<text class="reason" v-if="song.recommendReason">{{song.recommendReason}}</text>
									{{song.ar[0].name}}
								</view>
							</view>
						</view>
						<view class="mv iconfont icon-video" v-if="song.videoInfo.video"></view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
import { computed, onUpdated, ref } from 'vue'
const props = defineProps({
	list: Array
})

const swiperList = ref([])
onUpdated(() => {
	let arr = []
	props.list.forEach((item, i) => {
		if (arr.length === 3) {
			swiperList.value.push(arr)
			arr = []
		}
		arr.push(item)
	})
	console.log(swiperList.value)
})

</script>

<style lang="scss">
.recommend-song {
	margin: 30rpx 0;
	.recommend-hd {
		display: flex;
		justify-content: space-between;
		font-size: 30rpx;
		font-weight: bold;
	}
	.swiper-item {
		padding-right: 30rpx;
		overflow: hidden;
		.song-item {
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center; // y轴居中
			margin: 10rpx 0;
			.song-detail {
				display: flex;
				
				.pic {
					width: 100rpx;
					height: 100rpx;
					image {
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
				.desc {
					margin-left: 26rpx;
					line-height: 1.5;
					display: flex;
					flex-direction: column;
					justify-content: center;
					.author {
						font-size: 24rpx;
						color: #666;
						.reason {
							font-size: 20rpx;
							color: $uni-primary-color;
							background-color: #f5e7e9;
							padding: 4rpx;
							border: 1rpx solid #f5e7e9;
							border-radius: 4px;
						}
					}
				}
			}
			
		}
	}
	:deep(.uni-swiper-slide-frame) {  // 修改uni自带的样式，深度修改
		width: 95% !important; // 权限，!important权限最高
	}
}
.swiper-wrap {
	height: 370rpx;
}
</style>