<script>
	import baseUrl from '@/api/request.js'
	export default {
		onLaunch: function() {
			// console.log('App Launch')
			// 判断用户是否登录 ：正常来讲存在本地
			let key = uni.getStorageSync('cookie')
			if (!key) {
				// 没登陆
				this.$store.commit('changeLoginState', false)  // commit 专门用于触发mutations中的函数
				return 
			} 
			// 登录
			uni.request({
				url: baseUrl + '/login/status',
				data: {
					cookie: key
				},
				success: (res) => {
					console.log(res.data.data.account.id)
					let id = res.data.data.account.id
					if (id) {
						// 登录了获取用户详情，登录有效期
						this.$store.commit('changeLoginState', true)
						this.getUser(key)
					}
				} 
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			getUser(key) {
				if (!key) return
				uni.request({
					url: baseUrl + '/user/account',
					data: {
						cookie: key
					},
					success: (res) => {
						// console.log(res)
						let nickname = res.data.profile && res.data.profile.nickname
						let id = res.data.profile && res.data.profile.userId
						let avatar = res.data.profile && res.data.profile.avatarUrl
						this.$store.commit('getUserInfo', { nickname, userId: id, avatar}) // 存这些信息
					}
				})
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("http://at.alicdn.com/t/c/font_4417678_u9jz7s9okl9.css");
	* {
		margin: 0;
		padding: 0;
	}
	html, body {
		width: 100%;
		height: 100%;
	}
	#app {
		height: 100%;
		overflow-y: scroll;
	}
	uni-page-body {
		height: 100%;
		overflow-y: scroll;
	}
	.boxShadow {
		position: relative;
		perspective: 400px;
		transform-style: preserve-3d;
	}
	.boxShadow::after {
		content: '';
		display: block;
		height: 100%;
		width: 95%;
		position: absolute;
		top: -16rpx;
		left: 2.5%;
		background-color: #6e9d8b;
		z-index: 2;
		border-radius: 16rpx;
		transform: translateZ(-30rpx);
	}
	.boxShadow image {
		position: relative;
		z-index: 10;
	}
</style>
