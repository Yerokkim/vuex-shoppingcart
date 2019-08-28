import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Toasted from 'vue-toasted';
import store from './store'
 

Vue.config.productionTip = false

Vue.use(axios,Toasted)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
