import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vue-axios-auth-app.firebaseio.com/'
});

instance.interceptors.request.use(config => {
  console.log('request config', config);
  return config;
});

instance.interceptors.response.use(config => {
  console.log('response config', config);
  return config;
});

export default instance;