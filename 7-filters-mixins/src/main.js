import Vue from 'vue'
import App from './App.vue'

Vue.filter('toUpperCase', (value) => {
  return !value ? '' : value.toUpperCase();
})
Vue.filter('toLowerCase', function(value) {
  return !value ? '' : value.toLowerCase();
})


new Vue({
  el: '#app',
  render: h => h(App)
})
