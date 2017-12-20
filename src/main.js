import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/style/reset.css'
import './assets/style/iconfont/iconfont.css'
import '../node_modules/swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App }
})
