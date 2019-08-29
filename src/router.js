import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import View from '@/components/view'
import about from '@/components/about'

 
Vue.use(Router)
 
export default new Router({
	mode:'history',
  routes: [
    { path: '/', name: 'view', component: View },
    { path: '/about',  name: 'about', component: about},
    
  ]
})
