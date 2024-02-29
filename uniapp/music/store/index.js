import { createStore } from 'vuex'

export default createStore ({
	state: {
		isShowMenu: false,  // 控制菜单的显示隐藏
		loginState: false, 
		userInfo: {  // 用户信息
			nickname: '',
			userId: null,
			avatar: ''
		},
		isShowPlayer: false, 
		currentPlayId: null, // 当前播放的歌曲id
	},
	mutations: {
		changeIsShowMenu(state, flag) {
			state.isShowMenu = flag
		},
		changeLoginState(state, val) {
			state.loginState = val
		},
		getUserInfo(state, opt) {
			state.userInfo = opt
		},
		changeIsShowPlayer(state, flag) {
			state.isShowPlayer = flag
		},
		changeCurrentPlayId(state, id) {
			state.currentPlayId = id
		}
	}
})