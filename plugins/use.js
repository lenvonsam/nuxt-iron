
import Vue from 'vue'
import 'swiper/dist/css/swiper.css'
import vueClipboard from 'vue-clipboard2'
if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}
Vue.use(vueClipboard)
