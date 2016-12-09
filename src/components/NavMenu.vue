<template>
    <transition name="ltr">
        <section class="navList">         
            <router-link :to="{'name': 'list', query: {tab: 'all'}}">全部</router-link>
            <router-link :to="{'name': 'list', query: {tab: 'good'}}">精华</router-link>
            <router-link :to="{'name': 'list', query: {tab: 'ask'}}">问答</router-link>
            <router-link :to="{'name': 'list', query: {tab: 'share'}}">分享</router-link>
            <router-link :to="{'name': 'list', query: {tab: 'job'}}">招聘</router-link>
        </section>
    </transition>
</template>
<script>
    export default {
        name: 'navMenu'
    }
</script>
<style scoped>
    .navList {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        background: #ccc;
        width: 100%;
        top:40px;
        left:0px;
    }
    a {
        height: 30px;
        border-bottom: 1px solid #ccc;
    }
</style>