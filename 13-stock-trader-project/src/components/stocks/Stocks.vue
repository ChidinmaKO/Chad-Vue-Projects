<template>
    <div>
        <single-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></single-stock>
    </div>
</template>

<script>
    import SingleStock from './SingleStock.vue';

    export default {
        name: 'Stocks',

        components: {
            SingleStock,
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        },
    }
</script>

<style scoped>
    
</style>