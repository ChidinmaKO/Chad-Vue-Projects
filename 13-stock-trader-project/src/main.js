import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import { store } from './store/store.js'

Vue.use(VueRouter);

Vue.filter('toCurrency', (value) => {
  return '€' + value.toLocaleString('nl-NL')
});

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
