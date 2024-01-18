<template>
    <div class="header-container">
        <Header />
    </div>

    <div class="user-info">
        <div class="basic-info">
            <div class="avatar">
                <img src="../assets/img/avatar.jpg" alt="">
            </div>

            <div class="user-basic">
                <div class="user-name">Dolphin_海豚</div>
                <span class="redld">小红书号：7419136776</span>
            </div>
        </div>

        <div class="user-desc">大家好鸭</div>

        <div class="user-interactions">
            <div>
                <span class="count">0</span>
                <span class="shows">关注</span>
            </div>
            <div>
                <span class="count">0</span>
                <span class="shows">粉丝</span>
            </div>
            <div>
                <span class="count">0</span>
                <span class="shows">获赞与收藏</span>
            </div>
        </div>
    </div>
    <div class="reds-sticky">
        <div class="reds-tab-item">
            <span>笔记</span>
        </div>
        <div class="reds-tab-item">
            <span>收藏</span>
        </div>
        <div class="reds-tab-item">
            <span>点赞</span>
        </div>
    </div>
    <van-divider />

    <div class="bottom-menu">
        <FootNav />
    </div>
</template>

<script setup>
import FootNav from '../components/FootNav/FootNav.vue'
import Header from '../components/Header/Header.vue'
</script>

<style lang="less" scoped>
.user-info {
    box-sizing: border-box;
    padding: 0.1rem 0.4rem;

    .basic-info {
        display: flex;
        align-items: center;

        .avatar {
            width: 2rem;
            height: 2rem;
            overflow: hidden;
            border-radius: 50%;

            img {
                width: 100%;
                height: auto;
                display: block;
            }
        }

        .user-basic {
            margin-left: 16px;

            .user-name {
                color: #333;
                line-height: 120%;
                font-weight: 600;
                display: block;
            }

            .redld {
                font-size: 0.2rem;
                color: #333;
            }
        }
    }

    .user-desc {
        width: 100%;
        font-size: 14px;
        margin-top: 16px;
        line-height: 140%;
        color: #333;
    }

    .user-interactions {
        margin-top: 18px;
        width: 100%;
        display: flex;
        align-items: center;

        div {
            text-align: center;
            margin-right: 12px;

            span {
                display: block;
                font-size: 14px;
                color: #8b8a8a;
                line-height: 140%;
            }
        }
    }
}

.reds-sticky {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    .reds-tab-item {
        margin-right: 20px;
        span {
            color: #333;
            line-height: 120%;
            font-weight: 600;
            font-size: 18px;
            cursor: pointer;
        }
        span:hover {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        span:active {
            outline: none;
        }
    }

}
</style>