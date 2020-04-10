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
                    const stockPortfolio = data.stockPortfolio;
                    const stocks = data.stocks;

                    const portfolio = {
                        funds,
                        stockPortfolio,
                    };

                    commit('SET_STOCKS', stocks);
                    commit('SET_PORTFOLIO', portfolio);
                }
            });
        }
    },
    modules: {
        stocksStore,
        portfolioStore
    }
});