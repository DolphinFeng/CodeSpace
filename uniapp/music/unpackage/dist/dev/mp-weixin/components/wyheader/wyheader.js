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
  __name: "wyheader",
  props: {
    icon: {
      type: String,
      default: "mic"
    }
  },
  setup(__props) {
    const store = common_vendor.useStore();
    const showMenu = () => {
      store.commit("changeIsShowMenu", true);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(showMenu),
        b: common_vendor.p({
          type: "bars",
          size: "22"
        }),
        c: common_vendor.p({
          type: __props.icon,
          size: "22"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/codeSpace/uniapp/music/components/wyheader/wyheader.vue"]]);
wx.createComponent(Component);
