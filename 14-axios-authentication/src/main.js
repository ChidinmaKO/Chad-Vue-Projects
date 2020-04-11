import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-axios-auth-app.firebaseio.com/';
axios.defaults.headers.get['Content-Type'] = 'application/json';

// const requestInterceptor = axios.interceptors.request.use(config => {
//   console.log('request config', config);
//   return config;
// });
// const responseInterceptor = axios.interceptors.response.use(config => {
//   console.log('response config', config);
//   return config;
// });

// axios.interceptors.request.eject(requestInterceptor);
// axios.interceptors.response.eject(responseInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
