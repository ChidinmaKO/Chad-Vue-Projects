import Vue from 'vue';
import Vuex from 'vuex';
import axios from './axios-auth.js';
import globalAxios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {
    'AUTH_USER': (state, userData) => {
      state.idToken = userData.token,
      state.userId = userData.userId
    },
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
          dispatch('storeUserData', signUpData);

          console.log(response)
        }).catch(error => console.log(error));
    },

    signIn({ commit }, signInData) {
      axios.post(':signInWithPassword?key=AIzaSyB5XUA97t6jR72c3Dn4nmeIRMFGLs8oLRI', {
          email: signInData.email,
          password: signInData.password,
          returnSecureToken: true
        }).then(response => {
          commit('AUTH_USER', {
            token: response.data.idToken,
            userId: response.data.localId
          });
          console.log(response)
        }).catch(error => console.log(error));
    },

    storeUserData({ commit }, userData) {
      globalAxios.post('users.json', authData).then(response => console.log(response)).catch(console.error());
    },

    getUserData({ commit}, userData) {
      globalAxios.get('users.json')
        .then(response => {
          const usersArray = [];
          const data = response.data
          for(let key in data) {
            const user = data[key]
            user.id = key
            usersArray.push(user)
          }
          this.signedOut = false;
          this.name = usersArray[usersArray.length -1].name;
        })
        .catch(console.error());
    }
  },
  getters: {

  }
})

export default store;