
const state = {
    funds: 10000,
    portfolioStocks: []
};

const mutations = {
    'BUY_STOCK': (state, { stockId, stockPrice, stockQuantity }) => {
        // see if stock already exists in portfolio
        const record = state.portfolioStocks.find(element => element.id === stockId);
        const pushToPortfolioStocks = state.portfolioStocks.push({
            id: stockId,
            quantity: stockQuantity
        });
        record ? (record.quantity += stockQuantity) : pushToPortfolioStocks;

        state.funds -= stockPrice * stockQuantity;
    },
    'SELL_STOCK': (state, { stockId, stockPrice, stockQuantity }) => {
        const record = state.portfolioStocks.find(element => element.id === stockId);
        (record.quantity > stockQuantity) ? (record.quantity -= stockQuantity) : (state.portfolioStocks.splice(state.stocks.indexOf(record)));

        state.funds += stockPrice * stockQuantity;
    }
};

const actions = {
    sellStock: ({ commit }, order) => {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio: (state, getters) => {
        return state.portfolioStocks.map(stock => {
            // getters is for the overall store.js
            const record = getters.stocks.find(element => element.id === stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds: state => {
        return state.funds;
    }
};

const portfolioStore = {
    state,
    mutations,
    actions,
    getters
};

export default portfolioStore;