<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <span>选课系统</span>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <!-- 路由传参：写法一 -->
                        <!-- 欢迎{{$route.params.user}} -->
                        <!-- 写法二 -->
                        <!-- 欢迎{{$route.query.user}} -->
                        <!-- 第三种 -->
                        <!-- 欢迎{{$route.params.user}} -->
                        <!-- 第四种 -->
                        欢迎{{$route.hash.slice(1)}}
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>修改密码</el-dropdown-item>
                            <el-dropdown-item>个人详情</el-dropdown-item>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>

            </el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.common-layout {
    height: 100vh;

    .el-container {
        height: 100%;

        .el-header {
            background-color: antiquewhite;
            height: 80px;
            line-height: 80px;
            font-size: 30px;
            display: flex;
            // 弹性容器中所有子容器用空格隔开，只有两个时，一左一右
            justify-content: space-between;
        }
    }
}

.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  font-size: 24px;
}

</style>