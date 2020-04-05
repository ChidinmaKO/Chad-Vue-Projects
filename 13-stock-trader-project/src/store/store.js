import Vue from 'vue';
import Vuex from 'vuex';
import stocksStore from './modules/stocks';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        stocksStore,
    }
})