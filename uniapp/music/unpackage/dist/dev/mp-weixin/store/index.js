"use strict";
const common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    isShowMenu: false
    // 控制菜单的显示隐藏
  },
  mutations: {
    changeIsShowMenu(state, flag) {
      state.isShowMenu = flag;
    }
  }
});
exports.store = store;
