<template>
    <!-- vbless 快捷键 option开发方式-->
    <div class="header">
        <!-- 上下布局，下面是个公告 上面是个左中右-->
        <div class="content-wrapper">
            <div class="avatar">
                <!-- 为了防止图片变形：用个div装起来，高或者宽设置成和父容器一样就可以 -->
                <img src="./seller_avatar_256px.jpg" alt="">
            </div>
            <div class="content">
                <!-- 图片右边内容 -->
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">粥品香坊（回龙观）</span>
                </div>
                <div class="description">蜂鸟专送/38分钟送达</div>
                <div class="support">
                    <!-- 这个地方会单独做成一个小组件。面试：东西分离组件的依据：1.复用 2.当它具有独立的特性，比如购物车，点击会展开，再点开会收回，与里面的内容无关 -->
                    <!-- 先空着儿 -->
                    <span class="text">在线支付满28减5</span>
                </div>
            </div>
            <div class="support-count">
                <span class="count">5个</span>
                <i>></i>
            </div>
        </div>
        

        <div class="bulletin-wrapper">
            <!-- 下面的公告 -->
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
// 引入样式 颜色变量 需要打分号，否则报错   @import 和import不是一个东西
@import '@/common/style/variable.less';
@import '@/common/style/mixin.less';
.header {
    background-color: @color-background-ss;
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
}
</style>