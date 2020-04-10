<template>
  <div>
      <div class="col-sm-6 col-md-4">
        <button type="button" class="btn btn-success ">
            Funds:
            <span class="badge badge-light">{{ funds | toCurrency }}</span>
            <span class="sr-only">Amount of funds</span>
        </button>
      </div>

    <br><br><br>

    <single-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></single-stock>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import SingleStock from './SingleStock.vue';

    export default {
        name: 'Stocks',

        components: {
            SingleStock
        },
        computed: {
            ...mapGetters({
                stocks: 'stocks',
                funds: 'funds'
            })
            
        },
    };
</script>

<style scoped>
</style>