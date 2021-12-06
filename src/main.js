import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber'
import VAnimateCss from 'animate.css'
import router from './router'
import store from './store'

Vue.use(VAnimateCss)
Vue.config.productionTip = false
Vue.component('LikeNumber',LikeNumber)

Vue.filter("upperCase",function(value){
  return value.toUpperCase(value)
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
