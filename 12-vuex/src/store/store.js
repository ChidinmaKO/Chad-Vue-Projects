import Vue from 'vue';
import Vuex from 'vuex';
import counterStore from './modules/counter';
import namespace from './namespace';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters: {
        [namespace.VALUE]: state => {
            return state.value;
        }
    },
    mutations: {
        [namespace.MUTATE_UPDATE_VALUE]: (state, payload) => {
            state.value = payload;
        }
    },
    actions: {
        [namespace.UPDATE_VALUE]: ({ commit }, payload) => {
            commit(namespace.MUTATE_UPDATE_VALUE, payload);
        }
    },
    modules: {
        counterStore,
    }
});