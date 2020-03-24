import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind: function(el, binding, vnode) {
    var delay = binding.modifiers['delayed'] ? 3000 : 0;

    setTimeout(() => {
      return (binding.arg === 'background') ? ((el.style.backgroundColor = binding.value) && (el.style.color = 'white')) : (el.style.color = binding.value);
    }, delay)
  }
});

Vue.directive('focus', {
  inserted(el, binding, vnode) {
    el.focus()
    el.style.border = '2px solid'
  }
});

Vue.directive('bold', function(el, binding) {
  el.style.fontWeight = '700'
});

new Vue({
  el: '#app',
  render: h => h(App)
});
