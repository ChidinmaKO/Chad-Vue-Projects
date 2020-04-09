import stocks from '../../data/stocks.js';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS': (state, stocks) => {
        state.stocks = stocks;
    },
    'RANDOMIZE_STOCKS': (state) => {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    }
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
