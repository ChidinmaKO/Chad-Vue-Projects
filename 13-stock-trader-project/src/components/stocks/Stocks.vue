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

        data() {
            return {
                stocks: [
                    { id: 1, name: 'Facebook', price: 150 },
                    { id: 2, name: 'Snapchat', price: 20 },
                    { id: 3, name: 'Twitter', price: 110 },
                    { id: 4, name: 'Tiktok', price: 200 },
                ]
            }
        },
    }
</script>

<style scoped>
    
</style>