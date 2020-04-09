import stocks from '../../data/stocks.js';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS': (state, stocks) => {
        state.stocks = stocks;
    },
    'RANDOMIZE_STOCKS': (state) => {}
};

const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    },
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks)
    },
    randomizeStocks: ({ commit }) => {
        commit('RANDOMIZE_STOCKS')
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

const stocksStore =  {
    state,
    mutations,
    actions,
    getters
}

export default stocksStore;
