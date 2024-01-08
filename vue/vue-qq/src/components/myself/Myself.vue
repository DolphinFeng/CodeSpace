<template>
    <div class="header">
        <div class="small clear">
            <i class="iconfont icon-richeng"></i>
            <span>打卡</span>
            <i class="iconfont icon-shanchu2"></i>
        </div>

        <div class="wrapper">
            <router-link to='/about'>
                <div class="avatar"></div>
            </router-link>
            <div class="name">
                <span class="realName">Dolphin</span>
                <div class="level">
                    <i class="iconfont icon-taiyang"></i>
                    <i class="iconfont icon-taiyang"></i>
                    <i class="iconfont icon-taiyang"></i>
                    <i class="iconfont icon-yueliang"></i>
                    <i class="iconfont icon-yueliang"></i>
                    <i class="iconfont icon-yueliang"></i>
                    <i class="iconfont icon-xingxing2"></i>
                </div>
                <span class="qqNum">路途坎坷，道阻且长</span>
            </div>
            <div class="like">
                <i class="iconfont icon-erweima"></i>
            </div>
        </div>
    </div>

    <div class="body">
        <div class="item">
            <i class="iconfont icon-zhibo"></i>
            <span>直播</span>
            <i class="iconfont icon-fanhui2"></i>
        </div>
        <div class="item">
            <i class="iconfont icon-huiyuan"></i>
            <span>会员</span>
            <i class="iconfont icon-fanhui2"></i>
        </div>
        <div class="item">
            <i class="iconfont icon-qianbao"></i>
            <span>钱包</span>
            <i class="iconfont icon-fanhui2"></i>
        </div>
        <div class="item">
            <i class="iconfont icon--"></i>
            <span>财富小金库</span>
            <i class="iconfont icon-fanhui2"></i>
        </div>
        <div class="item">
            <i class="iconfont icon-clothes"></i>
            <span>个性装饰</span>
            <i class="iconfont icon-fanhui2"></i>
        </div>
        <div class="item">
            <i class="iconfont icon-xinhao"></i>
            <span>网卡</span>
            <i class="iconfont icon-fanhui2"></i>
        </div>
        <div class="item">
            <i class="iconfont icon-tupian"></i>
            <span>相册</span>
            <i class="iconfont icon-fanhui2"></i>
        </div>
        <div class="item">
            <i class="iconfont icon-shoucang"></i>
            <span>收藏</span>
            <i class="iconfont icon-fanhui2"></i>
        </div>
        <div class="item">
            <i class="iconfont icon-wenjian"></i>
            <span>文件</span>
            <i class="iconfont icon-fanhui2"></i>
        </div>
    </div>

    <div class="footer">
        <div class="child">
            <i class="iconfont icon-shezhi"></i>
            <span>设置</span>
        </div>
        <div class="child">
            <i class="iconfont icon-yueliang"></i>
            <span>夜间</span>
        </div>
        <div class="child">
            <i class="iconfont icon-a-1djba"></i>
            <span>等级</span>
        </div>
        <div class="child">
            <i class="iconfont icon-youceyingyongheji"></i>
            <span>新建</span>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.header {
    .small {
        margin-left: 25px;
        margin-top: 10px;
        margin-bottom: 15px;
        padding-right: 25px;
        .icon-shanchu2 {
            float: right;
        }
        span, .icon-richeng {
            float: left;
            padding-right: 25px;
        }
    }
    .clear::after{
        /* 伪元素本身不显示，需要content属性起作用，相当于触发器*/
        content: '';
        /*告诉浏览器，伪元素after之后要清除浮动*/
        clear: both;
        /*伪元素设为块级元素*/
        display: block;
        overflow: hidden;
    }

    .wrapper {
        display: flex;
        .avatar {
            width: 70px;
            height: 70px;
            border: 1px solid black;
            margin-left: 25px;
            margin-top: 10px;
            border-radius: 50%;
            background-image: url('@/assets/images/2.jpg');
            background-size: cover;
            border: none;
        }
        .name {
            display: flex;
            flex-direction: column;
            margin-top: 15px;
            margin-left: 15px;
            .realName {
                font-family: 'Roboto';
            }
            .level {
                color: rgb(254, 178, 0);
                .icon-taiyang {
                    font-size: 15px;
                }
            }
            .qqNum {
                font-size: 10px;
            }
        }
        .like {
            .icon-erweima {
                position: fixed;
                right: 20px;
                margin-top: 30px;
            }
        }
    }
}

.body{
    margin-left: 25px;
    margin-top: 35px;
    padding-right: 25px;
    .item {
        margin-top: 20px;
        span {
            margin-left: 20px;
        }
        .icon-fanhui2 {
            float: right;
        }
    }
}

.footer {
    position: fixed;
    bottom: 0;
    padding-bottom: 20px;
    display: flex;
    width: 100vw;
    margin-left: 10px;
    .child {
        margin: 0 15px;
        span {
            display: block; 
            margin: 0 auto;
            font-size: 10px;
        }
        i {
            display: block;
            font-size: 20px;
        }
    }
}
</style>