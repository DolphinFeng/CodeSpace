import baseUrl from './request.js'

export const apiGetSongUrl = (id) => {
	return uni.request({
		url: `${baseUrl}/song/url/v1`,
		method: 'GET',
		data: {
			id: id,
			level: 'jymster'
		}
	})
}

export const apiGetSongDetail = (id) => {
	return uni.request({
		url: `${baseUrl}/song/detail`,
		method: 'GET',
		data: {
			ids: id
		}
	})
}
