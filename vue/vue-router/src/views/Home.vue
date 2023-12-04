<template>
    <div>
        首页
        <nav>
            <router-link to="/home/newest">最新</router-link>
            <router-link to="/home/recommend">推荐</router-link>
        </nav>
    </div>

    <router-view></router-view>
</template>