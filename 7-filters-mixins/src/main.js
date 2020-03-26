import Vue from 'vue'
import App from './App.vue'

Vue.filter('toUpperCase', (value) => {
  return !value ? '' : value.toUpperCase();
})
Vue.filter('toLowerCase', function(value) {
  return !value ? '' : value.toLowerCase();
})
Vue.filter('countLength', (value) => {
  return !value ? '' : value + " (" + value.length + ")";
})

new Vue({
  el: '#app',
  render: h => h(App)
})
