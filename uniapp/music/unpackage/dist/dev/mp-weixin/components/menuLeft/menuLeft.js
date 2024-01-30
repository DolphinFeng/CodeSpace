"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "menuLeft",
  setup(__props) {
    const store = common_vendor.useStore();
    const isShow = common_vendor.computed(() => {
      return store.state.isShowMenu;
    });
    const hideMenu = () => {
      store.commit("changeIsShowMenu", false);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "right",
          size: "30"
        }),
        b: common_vendor.p({
          type: "scan",
          size: "24"
        }),
        c: common_vendor.n(common_vendor.unref(isShow) ? "show" : "hide"),
        d: common_vendor.o(hideMenu),
        e: common_vendor.unref(isShow)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5a515901"], ["__file", "D:/codeSpace/uniapp/music/components/menuLeft/menuLeft.vue"]]);
wx.createComponent(Component);
