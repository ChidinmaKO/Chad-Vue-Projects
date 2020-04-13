import Vue from 'vue';
import Vuex from 'vuex';
import router from './router.js';
import axios from './axios-auth.js';
import globalAxios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },

  mutations: {
    'AUTH_USER': (state, userData) => {
      state.idToken = userData.token,
      state.userId = userData.userId
    },
    'STORE_USER': (state, user) => {
      state.user = user
    },
    'LOG_OUT_USER': (state) => {
      state.idToken = null,
      state.userId = null
    }
  },

  actions: {
    signUp({ dispatch, commit }, signUpData) {
      axios.post(':signUp?key=AIzaSyB5XUA97t6jR72c3Dn4nmeIRMFGLs8oLRI', {
          email: signUpData.email,
          password: signUpData.password,
          returnSecureToken: true
        }).then(response => {
          commit('AUTH_USER', {
            token: response.data.idToken,
            userId: response.data.localId
          });

          const now = new Date();
          const expirationDate = new Date(now.getTime() + (response.data.expiresIn * 1000));
          localStorage.setItem('token', response.data.idToken);
          localStorage.setItem('userId', response.data.localId);
          localStorage.setItem('expirationDate', expirationDate);

          dispatch('storeUserData', signUpData);
          dispatch('setLogOutTimer', response.data.expiresIn);

          console.log(response)
        }).catch(error => console.log(error));
    },

    signIn({ commit, dispatch }, signInData) {
      axios.post(':signInWithPassword?key=AIzaSyB5XUA97t6jR72c3Dn4nmeIRMFGLs8oLRI', {
          email: signInData.email,
          password: signInData.password,
          returnSecureToken: true
        }).then(response => {
          commit('AUTH_USER', {
            token: response.data.idToken,
            userId: response.data.localId
          });
          router.replace({ name: 'dashboard' });

          const now = new Date();
          const expirationDate = new Date(now.getTime() + (response.data.expiresIn * 1000));
          localStorage.setItem('token', response.data.idToken);
          localStorage.setItem('userId', response.data.localId);
          localStorage.setItem('expirationDate', expirationDate);

          console.log(response);
          dispatch('setLogOutTimer', response.data.expiresIn);

        }).catch(error => console.log(error));
    },

    storeUserData({ commit, state }, userData) {
      if(!state.idToken) {
        return;
      }
      globalAxios.post('/users/' + state.userId + '.json?auth=' + state.idToken, userData).then(response => console.log(response)).catch(console.error());
    },

    fetchUser({ commit, state }) {
      if(!state.idToken) {
        return;
      }
      globalAxios.get('/users/' + state.userId + '.json?auth=' + state.idToken)
        .then(response => {
          const usersArray = [];
          const data = response.data
          for(let key in data) {
            const user = data[key]
            user.id = key
            usersArray.push(user)
          }
          const active_user = usersArray[usersArray.length -1];
          commit('STORE_USER', active_user);
        })
        .catch(console.error());
    },

    logOutUser({ commit }) {
      commit('LOG_OUT_USER');

      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('expirationDate');
      
      router.replace({ name: 'signin' });
    },

    setLogOutTimer({ commit }, expirationTime) {
      setTimeout(() => {
        commit('LOG_OUT_USER');
        router.replace({ name: 'signin' });
      }, expirationTime * 1000);
    },

    tryAutoLogin({ commit }) {
      const token = localStorage.getItem('token');
      if(!token) { return; }

      const userId =  localStorage.getItem('userId');

      const expirationDate = localStorage.getItem('expirationDate');
      const now = new Date();
      if(now >= expirationDate) { return; }
      commit('AUTH_USER', {
        token: token,
        userId: userId
      });
      router.replace({ name: 'dashboard' });
    }
  },

  getters: {
    user: state => {
      return state.user;
    },
    isAuthenticated: state => {
      return state.idToken !== null;
    }
  }
});

export default store;