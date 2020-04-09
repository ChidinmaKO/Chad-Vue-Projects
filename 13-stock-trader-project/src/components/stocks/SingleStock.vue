<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h3>
            </div>

            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        class="form-control" 
                        placeholder="Quantity" 
                        v-model="quantity" 
                        type="number"
                        :class="{ danger: insufficientFunds }"
                    >
                </div>

                <div class="pull-right">
                    <button 
                        class="btn btn-success" 
                        @click="buyStock" 
                        :disabled="insufficientFunds || disableButton()"
                    >
                        Buy
                    </button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'SingleStock',
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    stockQuantity: this.quantity
                };
                this.$store.dispatch('buyStock', order)
                this.quantity = 0;
            },
            disableButton() {
                // `+` is a handy way of converting the string to an integer. It can be used in place of parseInt(num)
                return (this.quantity <= 0 || !Number.isInteger(+this.quantity));
            }
        },
        computed: {
            insufficientFunds() {
                const funds = this.$store.getters.funds;
                return this.quantity * this.stock.price > funds;
            }
        },
    }
</script>

<style scoped>
    .danger {
        border: 1px solid #ED213A;
        color: #FF4B2B;
    }
</style>