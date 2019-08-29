import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router.js'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
