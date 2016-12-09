<template>
    <div class="page">
        <nav-head :midTitle="getTabs(searchInfo.tab)"></nav-head>
        <ul>
            <li v-for="item in topics" key="item.id" >
                <router-link :to="{name: 'topic', params: {id: item.id}}">
                    <div :class="item.top? 'top':(item.good? 'good':item.tab)" 
                         v-text="getTabs(item.tab, item.good, item.top)">
                    </div>
                    <h4 v-text="item.title"></h4>
                    <div class="info">
                        <img :src=item.author.avatar_url alt="" class="avatar" keep-alive>
                        <span v-text="item.author.loginname" class="author"></span>
                    </div>   
                </router-link>
            <li>
        </ul>
    </div>
    
</template>
<script>
    import welcome from './Welcome'
    import list from './List'
    import $ from 'webpack-zepto'
    import navHead from './NavHead'

    export default{
        data(){
            return {
                topics: [],
                searchInfo: {
                    page: 1,
                    tab: 'all',
                    limit: 20,
                    mdrender: true
                }
            }
        },
        components:{
            welcome,
            list,
            navHead
        },
        beforeRouteLeave(to,from,next){
            if(to.name === 'topic'){
                 window.sessionStorage.topics = JSON.stringify(this.topics);
                 window.sessionStorage.searchInfo = JSON.stringify(this.searchInfo);
                 console.log(sessionStorage)
            }
            next();
        },   
        mounted(){
            if(window.sessionStorage.searchInfo){
                this.topics = JSON.parse(window.sessionStorage.topics);
                this.searchInfo = JSON.parse(window.sessionStorage.searchInfo);
            }else{
                this.getTopics()
            }    
        },
        methods: {
            getTopics(){
                let params = $.param(this.searchInfo);

                $.get(`https://cnodejs.org/api/v1/topics?${params}`, (d) => {
                    if(d && d.data){
                        this.topics = d.data
                    }
                })
            },
            getTabs(tab, good, top){
                if(top){
                    return '置顶';
                }else if(good){
                    return '精华'; 
                }
                switch(tab){
                    case 'job':
                        return '招聘';
                        break;
                    case 'ask':
                        return '问答';
                        break;
                    case 'share':
                        return '分享';
                        break;
                    case 'all':
                        return '全部';
                        break;
                    default:
                        return '未分类';
                        break;
                }
            }
        },
        watch: {
            '$route' (to, from) {
                // 如果是当前页面切换分类的情况
                if (to.query && to.query.tab) {
                    this.searchInfo.tab = to.query.tab;
                }
                this.searchInfo.limit = 20;
                this.getTopics();
            }
        }
    }
</script>
<style scoped>
    ul {
        top: 40px;
    }
    li {
        padding: 10px;
        border-bottom:1px solid #ccc;
    }

    li:first-child {
        margin-top: 40px;
    }

    /*处理载入画面消失后出现的横线问题*/
    li:only-child {
        display:none;
    }

    h4 {
        padding:10px 10px 5px 10px;
        font-size: 15px;
        color:#222;
    }

    .info {
        padding-left: 10px;
        height:24px;
    }

    .avatar {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
    
    .author {
        color: #41b883;
    }

</style>