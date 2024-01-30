// 项目和首页相关的接口
import baseUrl from './request.js'
// 获取banner
export const apiGetBanner = (data) => {
	return uni.request({
		url: baseUrl + '/banner',
		method: 'GET',
		data: data,
		// authType: 'None'
	})
}

export const apiGetBall = () => {
	return uni.request({
		url: baseUrl + '/homepage/dragon/ball',
		method: 'GET',
	})
}

export const apiGetRecommendList = () => {  // 推荐歌单
	return uni.request({
		url: baseUrl + '/recommend/resource',
		method: 'GET',
	})
}

export const apiGetRecommendSongs = () => {  // 推荐歌曲
	return uni.request({
		url: baseUrl + '/recommend/songs',
		method: 'GET',
	})
}

export const apiGetPersonalizedList = () => {  // 雷达
	return uni.request({
		url: baseUrl + '/personalized?limit=6',
		method: 'GET',
	})
}