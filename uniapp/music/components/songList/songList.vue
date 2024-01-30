<template>
	<view class="recommend">
		<view class="recommend-hd">
			<view class="title">
				{{title}}
			</view>
			<view class="more">
				<uni-icons type="right" size="10"></uni-icons>
			</view>
		</view>
		<view class="recommend-bd">
			<view class="recommend-bd__item" v-for="item in list" :key="item.id">
				<view class="item-pic">
					<image :src="item.picUrl" mode="aspectFill"></image>
				</view>
				<view class="title">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
defineProps({
	list: Array,
	title: String,
})
</script>

<style lang="scss" scoped> 
.recommend {
		.recommend-hd {
			display: flex;
			justify-content: space-between;
			font-size: 30rpx;
		}
		.recommend-bd {
			margin-top: 20rpx;
			display: flex;
			overflow-x: scroll;
			.recommend-bd__item {
				flex: 0 0 240rpx;
				margin-left: 30rpx;
				&:nth-child(1) {
					margin-left: 0;
				}
				.item-pic {
					width: 240rpx;
					image {
						width: 100%;
						height: 240rpx;
						border-radius: 10rpx;
					}
				}
				.title {
					font-size: 24rpx;
					// line-height: 24rpx;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					text-overflow: ellipsis;
					overflow: hidden;
					color: #2c2c2c;
				}
			}
		}
	}
</style>