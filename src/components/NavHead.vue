<template>
    <div keep-alive>
        <nav-menu v-show="showMenu"></nav-menu>
        <head>
            <i @click="showMenu = !showMenu">菜单</i>
            <h4 v-text="midTitle"></h4>  
            <span>消息</span>  
        </head>
    </div> 
</template>
<script>
    import navMenu from './NavMenu'
    export default {
        name: 'navHead',
        props: ['midTitle'],
        data(){
            return {
                showMenu: false
            }
        },
        components: {
            navMenu
        }
    }
</script>
<style scoped>
    head {
        display: flex;
        /*flex-direction: row;
        flex-wrap: nowrap; 简写为:*/
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        height:40px;
        width:100%;
        background: #41b883;
        position: fixed;
        top:0;
        color: #35495e;
    }
</style>