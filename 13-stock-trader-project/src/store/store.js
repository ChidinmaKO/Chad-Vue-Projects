import Vue from 'vue';
import Vuex from 'vuex';
import stocksStore from './modules/stocks';
import portfolioStore from './modules/portfolio';

Vue.use(Vuex)

export const store = new Vuex.Store({
    actions: {
        loadData: ({ commit }) => {
            Vue.http.get('data.json').then(response => response.json()).then(data => {
                if(data) {
                    const funds = data.funds;
                    const stocks = data.stocks;
                    const stockPortfolio = data.stockPortfolio;

                    const portfolio = {
                        // see portfolio.js
                        funds,
                        stockPortfolio,
                    };

                    commit('SET_STOCKS', stocks);
                    commit('SET_PORTFOLIO', portfolio);
                }
            })
        }
    },
    modules: {
        stocksStore,
        portfolioStore
    }
})