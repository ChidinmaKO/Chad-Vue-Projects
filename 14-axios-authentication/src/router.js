import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store.js'

import WelcomePage from './components/welcome/welcome.vue'
import DashboardPage from './components/dashboard/dashboard.vue'
import SignupPage from './components/auth/signup.vue'
import SigninPage from './components/auth/signin.vue'

Vue.use(VueRouter)

const isAuthenticated = (to, from, next) => {
  return store.state.idToken ? next() : next('/signin');
}

const routes = [
  { path: '/', component: WelcomePage },
  { 
    path: '/signup', 
    component: SignupPage, 
    name: 'signup' 
  },
  { 
    path: '/signin', 
    component: SigninPage, 
    name: 'signin'
  },
  { 
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardPage,
    beforeEnter: isAuthenticated
  }
]

export default new VueRouter({mode: 'history', routes})