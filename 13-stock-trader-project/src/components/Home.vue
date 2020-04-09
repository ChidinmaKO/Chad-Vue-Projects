<template>
    <div>
        <h2>Buy, Sell or View your Portfolio</h2>
        <h4>You may Save & Load your data</h4>
        <h5>Click on '<b>End Day</b>' to begin a new day</h5>

        <hr>

        <b>Your Funds Today: {{ funds }}</b>
    </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
    }
</script>

<style scoped>
    div {
        text-align: center;
    }
</style>