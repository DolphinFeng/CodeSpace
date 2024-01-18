<template>
	<view>about page</view>
	<view class="btn">
		<button type="default">按钮</button>
		<view class="iconfont">&#xe600</view>
	</view>
</template>

<script setup>
import { onMounted } from 'vue';
// onMounted(() => {
// 	// 发请求
// 	uni.request({
// 		url: 'https://mock.presstime.cn/mock/65a9154bb02591272cc21c5d/movie/movieList',
// 		method: 'GET'
// 	}).then((res) => {
// 		console.log(res);
// 	});
// });
onMounted(() => {
	// 发请求
	const reqTask = uni.request({
		url: 'https://mock.presstime.cn/mock/65a9154bb02591272cc21c5d/movie/movieList',
		method: 'GET',
		success: (res) => {
			console.log(res);

			uni.setStorage({
				key: 'movieName',
				data: res.data.movieList[0].nm,
				success() {
					uni.showToast({
						title: '保存成功',
						duration: 2000,
						icon: 'success'
					});
				}
			});
		}
	});
	// reqTask.abort()  // 断接请求
});
</script>
<style lang="scss">
.btn {
	button {
		width: 350rpx; // 750为iPhone6的两倍 为标准 750rpx就是100vw  1rpx就是0.5px  rpx就是物理像素单位
	}
}
</style>
