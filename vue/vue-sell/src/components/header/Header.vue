<template>
    <!-- vbless 快捷键 option开发方式-->
    <div class="header" @click="showDetail">
        <!-- 上下布局，下面是个公告 上面是个左中右-->
        <div class="content-wrapper">
            <div class="avatar">
                <!-- 为了防止图片变形：用个div装起来，高或者宽设置成和父容器一样就可以 -->
                <img :src="seller.avatar" alt="">
            </div>
            <div class="content">
                <!-- 图片右边内容 -->
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
                <div class="support" v-if="seller.supports">
                    <!-- 这个地方会单独做成一个小组件。面试：东西分离组件的依据：1.复用 2.当它具有独立的特性，比如购物车，点击会展开，再点开会收回，与里面的内容无关 -->
                    <!-- components/support-icon/support-icon 父子组件，support-icon就相当于子组件-->
                    <SupportIcon size="1" :type="seller.supports[0].type"/>
                    <!-- size是固定的写死。 -->
                    <span class="text">{{seller.supports[0].description}}</span>
                    <!-- 父组件默认空对象，还访问了下标会报错 解决方案：v-if如果有才会加载 -->
                </div>
            </div>
            <div class="support-count">
                <span class="count" v-if="seller.supports">{{seller.supports.length}}个</span>
                <i class="iconfont icon-youjiantou"></i>
            </div>
        </div>
        
        <div class="bulletin-wrapper">
            <!-- 下面的公告 -->
            <span class="bulletin-title">
                <!-- 公告图片 -->
            </span>
            <span class="bulletin-text">{{seller.bulletin}}</span>
            <i class="iconfont icon-youjiantou"></i>
        </div>
        <!--   -->
        <div class="bg" v-if="seller.avatar" :style="{backgroundImage: `url(${seller.avatar})`}">
        </div>
        <!-- 虚化图片的背景可以同级加一个div  图片放这就是变量 -->
        <HeaderDetail v-show="detailShow" @hide="handle"></HeaderDetail>
    </div>
</template>

<script>
// 引入组件
import SupportIcon from '@/components/support/Support-icon.vue';
import HeaderDetail from '@/components/header-detail/Header-detail.vue';
    export default {
        components: {
            SupportIcon,
            HeaderDetail
        },
        props: {
            seller: {
                type: Object,
                // type若是对象，default就必须是箭头形式（官方建议的）
                default: () => {
                    return {}
                }
            }
        },
        data() {
            return {
                detailShow: false
            }
        },
        methods: {
            showDetail() {
                this.detailShow = true
            },
            handle(val){
                console.log('子组件发布了一个hide,值为:', val)
                this.detailShow = val   // 发布订阅模式 click点击才会触发，hide被定义出才会触发
                // 为何到这儿关不了，弹窗是子容器，所以点击子容器也会点到自己，这个叫做冒泡
                // 如何点子不点到自己，yyx封装了一个stop,子容器里面的click.stop
            }
        }
    }
</script>

<style lang="less" scoped>
// 引入样式 颜色变量 需要打分号，否则报错   @import 和import不是一个东西
@import '@/common/style/variable.less';
@import '@/common/style/mixin.less';


.header {
    background-color: @color-background-ss;
    position: relative;
    .content-wrapper{
        display: flex; // 弹性容器：子容器去到同一行
        padding: 24px 12px 18px 24px; // 上右下左
        position: relative;
        .avatar{
            width: 64px;
            height: 64px;
            img{
                width: 100%;
                // 百分比会继承父容器
                border-radius: 2px;
            }
        }
        .content{
            flex: 1;
            margin-left: 16px;
            color: @color-white; // 字体变白色
            
            .title{
                display: flex;
                align-items: center;
                margin-bottom: 8px;

                .brand{
                    // 图片和文字要对齐，弹性就可以
                    // 行内元素不能直接设置宽高，如果在弹性容器里面就可以。行内容器的非块级可以设置宽高
                    width: 30px;
                    height: 18px;
                    // background-image: url('./brand@2x.png'); // 这里有个3x，考虑到三倍屏幕iPhone6plus。所以需要获取到用户的手机，cs来获取（可以封装css函数）。为何不能直接用3x，可能2屏幕会太挤了
                    .bg-image('./brand');
                    background-size: cover; // 把容器覆盖满，变形得不多，因为尺寸刚好就是那个尺寸
                }
                .name{
                    // 有了less就不用bem命名规范
                    margin-left: 6px;
                    font-size: @fontsize-large;
                    font-weight: bold;
                }
            }
            .description{
                font-size: @fontsize-small;
                margin-bottom: 8px;
            }
            .support{
                // 这里其实是来自后端的数据，点击可以看到图片里第一条就是这个内容
                display: flex; // 让里面去到同一行
                align-items: center;
                .text{
                    font-size: @fontsize-small-s;
                    margin-left: 4px;
                }
            }
        }
        .support-count{
            position: absolute;
            right: 12px;
            bottom: 14px;
            padding: 0 8px;
            height: 24px;
            // line-height: 24px;
            text-align: center;
            background: @color-background-sss;
            border-radius: 14px;
            align-items: center;
            color: @color-white;
            .count{
                font-size: @fontsize-small-s;
            }
            .iconfont{
                font-size: @fontsize-small-s;
                margin-left: 2px;
            }
        }
    }
    .bulletin-wrapper{
        // 弹性容器，两个子容器都是flex: 1就是一半一半， 如果想要一个20px，其余给到另一个就是flex: 0 0 20px  flex: 1  
        // 
        display: flex;
        height: 28px;
        padding: 0 8px;
        background-color: @color-background-sss;
        align-items: center;
        color: @color-white;
        .bulletin-title{
            // width: 22px; 公告被挤了
            flex: 0 0 22px; // 第一个参数是放大的比例，第二个缩小比例，第三个，不放大不缩小占据多少
            height: 12px;
            .bg-image('bulletin');
            background-size: 100% 100%; // cover不变形的，可能会截取

        }
        .bulletin-text{
            flex: 1;  // 剩下的宽度都给我
            margin-left: 4px;
            font-size: @fontsize-small-s;
            white-space: nowrap; // 强制单行显示
            overflow: hidden; // 超出则隐藏
            text-overflow: ellipsis; // 超出部分变更成省略号

        }
        .icon-youjiantou{
            flex: 0 0 10px;
            font-size: @fontsize-small-s;
        }
    }
    
    .bg{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        // 绝对定位全部铺开
        
        background-size: 100% 100%;
        z-index: -1;
        filter: blur(10px); // 虚化
    }
}

</style>