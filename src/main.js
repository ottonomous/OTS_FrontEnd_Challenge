import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from './router'
import { apolloProvider } from './vue-apollo'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
