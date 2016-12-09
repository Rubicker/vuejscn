import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import FastClick from 'fastclick'
import 'normalize.css'
Vue.use(VueRouter)

//解决点透问题
FastClick.attach(document.body);

// 实例化路由
const router = new VueRouter({
  //采用 HTML5 History 模式
  mode: 'history',
  routes,
  //前进后退至目标路由时，若存在 savedPosition 则让页面滚动到相应位置
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition
    }else{
      return {x: 0, y: 0}
    }
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  mounted(){
    console.log(this.$route)
  }
}).$mount('#app')
