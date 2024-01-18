<template>
	<view class="content">
		<!-- 这是个a标签 -->
		<navigator url="/pages/about/about">去about页面</navigator>
		<image class="logo" src="/static/logo.png" @click="toAbout"></image>
		<view class="text-area" @click="changeTitle">
			<text class="title">{{ title }}</text>
			<text class="title">{{ reverseTitle }}</text>
		</view>
		<view class="name">
			<text>{{ name }}</text>
		</view>

		<song :data="list.song" />
	</view>
</template>

<script setup>
import song from '../../components/song/song.vue';
import { computed, reactive, ref } from 'vue';

const toAbout = () => {
	uni.navigateTo({
		url: '/pages/about/about' // uniapp已经帮你封装好了，不需要引入路由
	});
};

const title = ref('海豚');
const name = getApp().globalData.name;
const changeTitle = () => {
	title.value = title.value === '海豚' ? 'Dolphin' : '海豚';
};
const reverseTitle = computed(() => {
	return title.value.split('').reverse().join('');
});

const list = reactive({
	song: {
		img: 'https://ts1.cn.mm.bing.net/th?id=ORMS.32b0b8d33ea7b8cd3298c88b2243378b&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0',
		title: '唐嫣',
		price: '18',
		marketPrice: '10'
	}
});
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
