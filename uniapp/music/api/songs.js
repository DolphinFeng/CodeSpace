import baseUrl from './request.js'

export const apiGetPlayList = (id, limit, offset) => {
	return uni.request({
		url: `${baseUrl}/playlist/track/all`,
		method: 'GET',
		data: {
			id: id,
			limit: limit,
			offset: offset
		}
	})
}

export const apiGetPlayListDetail = (id) => {
	return uni.request({
		url: `${baseUrl}/playlist/detail`,
		method: 'GET',
		data: {
			id: id
		}
	})
}