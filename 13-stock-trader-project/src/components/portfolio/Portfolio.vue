<template>
    <div class="container">

        <h4 v-if="noStocks()" style="text-align: center">{{ emptyMsg }}</h4>

        <div v-else>
            <div class="col-sm-6 col-md-4">
                <button type="button" class="btn btn-primary">
                    Funds:
                    <span class="badge badge-light">{{ funds }}</span>
                    <span class="sr-only">Amount of funds</span>
                </button>
            </div>

            <br><br><br>

            <portfolio-single-stock
                v-for="stock in stocks" 
                :key="stock.id" 
                :stock="stock"
            >
            </portfolio-single-stock>
        </div>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import PortfolioSingleStock from './PortfolioSingleStock.vue';
    
    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio',
                funds: 'funds'
            })
        },
        methods: {
            noStocks() {
                return this.stocks.length === 0;
            }
        },
        data() {
            return {
                emptyMsg: 'Your portfolio is empty'
            }
        },
        components: {
            PortfolioSingleStock
        }
    }
</script>

<style scoped>
    
</style>