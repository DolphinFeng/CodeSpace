<template>
    <div class="container">
        <div class="head">
            <i class="iconfont icon-fanhui5"></i>
            <i class="iconfont icon-shezhi"></i>
        </div>

        <div class="body">
            <div class="detail">
                <div class="avatar"></div>
                <div class="name">
                    <span class="realName">冯都平</span>
                    <span class="nickName">昵称: Dolphin</span>
                    <span class="qqNum">QQ: 22922418288</span>
                </div>
                <div class="like">
                    <i class="iconfont icon-dianzan"></i>
                    <div class="likeNum">30473</div>
                </div>

                <div class="content">
                    <i class="iconfont icon-xingbienan"></i>
                    <span> 男 | 20岁 | 5月25日 双子座 | 现居 江西·萍乡 | 来自 江西·萍乡·湘东区 | 东华理工大学 | 学生 | 1648493253@qq.com</span>
                    <i class="iconfont icon-fanhui2"></i>
                </div>

                <div class="degree">
                    <i class="iconfont icon-taiyang"></i>
                    <i class="iconfont icon-taiyang"></i>
                    <i class="iconfont icon-taiyang"></i>
                    <i class="iconfont icon-yueliang"></i>
                    <i class="iconfont icon-yueliang"></i>
                    <i class="iconfont icon-xingxingx"></i>
                    <i class="iconfont icon-fanhui2"></i>
                </div>
                
                <div class="service">
                    <span>TA还未开通任何特权服务</span>
                    <i class="iconfont icon-fanhui2"></i>
                </div>
                
                <div class="tag"></div>
            </div>

            <div class="space">

            </div>

            <div class="gift">

            </div>
        </div>

        <div class="foot">
            <button class="video">音视频通话</button>
            <button class="gift">送礼物</button>
            <button class="send">发消息</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.container {
    min-height: 100vh;
    color: black;
}
.head {
    overflow: auto;
    padding: 10px;
    background-image: url(@/assets/images/1.JPG);
    background-size: cover;
    height: 20vh;
    color: white;
    .icon-fanhui5 {
        float: left;
        font-size: 25px;    
        // filter: invert(50%);
    }
    .icon-shezhi {
        float: right;
        font-size: 25px;
    }
}

.body {
    display: flex;
    min-height: 100vh;
    // border-top-right-radius: 32px;
    // border-top-left-radius: 32px;
    .detail {
        display: flex;
        height: 25vh;
        width: 100%;
        .avatar {
            width: 70px;
            height: 70px;
            border: 1px solid black;
            margin-left: 10px;
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
                font-family: '黑体';
            }
            .nickName {
                font-size: 10px;
            }
            .qqNum {
                font-size: 10px;
            }
        }
        .like {
            .icon-dianzan {
                position: fixed;
                right: 20px;
                margin-top: 30px;
            }
            .likeNum {
                position: fixed;
                right: 15px;
                margin-top: 45px;
                font-size: 10px;
            }
        }

        .content {
            position: fixed;
            margin-top: 90px;
            margin-left: 10px;
            .icon-xingbienan {
                color: rgb(6, 155, 253);
            }
            span {
                font-size: 10px;
                color: rgb(170, 170, 170);
            }
            .icon-fanhui2 {
                flex: 1;
                float: right;
                padding-right: 10px;
            }
        }
        .degree {
            position: fixed;
            margin-top: 140px;
            margin-left: 10px;
            color: rgb(237, 170, 70);
            .iconfont {
                font-size: 15px;
                &.icon-yueliang {
                    font-size: 10px;
                }
                &.icon-xingxingx {
                    font-size: 5px;
                }
                &.icon-fanhui2 {
                    position: fixed;
                    right: 10px;
                    color: black;
                }
            }
        }
        .service {
            position: fixed;
            margin-top: 170px;
            margin-left: 10px;
            span{
                font-size: 10px;
            }
            .icon-fanhui2 {
                position: fixed;
                right: 10px;
                color: black;
            }

        }
    }
}

.foot {
    position: fixed;
    bottom: 0;
    padding-bottom: 20px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    button {
        border-radius: 4px;
        width: 100px;
        line-height: 40px;
        margin: 5px;
        text-align: center;
        border: none;
        font-family: '黑体', sans-serif; // 后面的是备用字体，前面不支持就会自动用后面的
    }
    .video {
        border: 1px solid rgb(204, 204, 204);
    }
    .gift {
        border: 1px solid rgb(204, 204, 204);
    }
    .send {
        background-color: rgb(0, 152, 255);
        color: white;
    }
}
</style>