import baseUrl from './request.js'

// 我的页面的所有接口
export const apiGetUserInfo = (uid) => {
	return uni.request({
		url: `${baseUrl}/user/detail`,
		method: 'GET',
		data: {
			uid: uid
		}
	})
}

export const apiGetUserSongsList = (uid) => {
	return uni.request({
		url: `${baseUrl}/user/playlist`,
		method: 'GET',
		data: {
			uid: uid
		}
	})
}
