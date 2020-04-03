import namespace from '../namespace.js';

const state = {
    counter: 0
};

const getters = {
    [namespace.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    [namespace.STRING_COUNTER]: state => {
        return state.counter + ' Clicks';
    },
};

const mutations = {
    [namespace.MUTATE_INCREMENT_COUNTER]: (state, payload) => {
        state.counter += payload;
    },
    [namespace.MUTATE_DECREMENT_COUNTER]: (state, payload) => {
        state.counter -= payload;
    },
};

const actions = {
    [namespace.COUNTER_INCREMENT]: ({ commit }, payload) => {
        commit(namespace.MUTATE_INCREMENT_COUNTER, payload);
    },
    [namespace.COUNTER_DECREMENT]: ({ commit }, payload) => {
        commit(namespace.MUTATE_DECREMENT_COUNTER, payload);
    },
    [namespace.COUNTER_INCREMENT_ASYNC]: ({ commit, state }, payload) => {
        setTimeout(() => {
            state.counter += 2;
            commit(namespace.MUTATE_INCREMENT_COUNTER, payload);
        }, 1000)
    },
    [namespace.COUNTER_DECREMENT_ASYNC]: ({ commit }, payload) => {
        setTimeout(() => {
            commit(namespace.MUTATE_DECREMENT_COUNTER, payload.by);
        }, payload.duration)
    },
};

const counterStore = {
    state,
    getters,
    mutations,
    actions,
}

export default counterStore;