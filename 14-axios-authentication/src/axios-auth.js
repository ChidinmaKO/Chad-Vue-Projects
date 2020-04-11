import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
  headers: {'Content-Type': 'application/json'}
});

// instance.interceptors.request.use(config => {
//   console.log('request config', config);
//   return config;
// });

// instance.interceptors.response.use(config => {
//   console.log('response config', config);
//   return config;
// });

export default instance;