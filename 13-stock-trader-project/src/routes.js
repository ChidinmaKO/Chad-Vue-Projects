import Home from './components/Home.vue';

const Portfolio = resolve => {
    require.ensure(['./components/portfolio/Portfolio.vue'], () => {
        resolve(require('./components/portfolio/Portfolio.vue'));
    }, 'portfolio')
};

const Stocks = resolve => {
    require.ensure(['./components/stocks/Stocks.vue'], () => {
        resolve(require('./components/stocks/Stocks.vue'));
    }, 'stocks')
};

export const routes = [
    { path: '', component: Home, name: 'home' },
    { path: '/portfolio', component: Portfolio, name: 'portfolio' },
    { path: '/stocks', component: Stocks, name: 'stocks' },
    { path: '*', redirect: { name: 'home' } }
];