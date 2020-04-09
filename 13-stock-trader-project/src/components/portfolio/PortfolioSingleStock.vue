<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
                </h3>
            </div>

            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        class="form-control" 
                        placeholder="Quantity" 
                        v-model="quantity" 
                        type="number"
                        :class="{ danger: insufficientQuantity }"
                    >
                </div>

                <div class="pull-right">
                    <button 
                        class="btn btn-info" 
                        @click="sellStock" 
                        :disabled="insufficientQuantity || disableButton()"
                    >
                        Sell
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'PortfolioSingleStock',
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            ...mapActions({
                sellPortfolioStock: 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    stockQuantity: this.quantity
                }
                this.sellPortfolioStock(order);
                this.quantity = 0;

            },
            disableButton() {
                // `+` is a handy way of converting the string to an integer. It can be used in place of parseInt(num)
                return (this.quantity <= 0 || !Number.isInteger(+this.quantity));
            }
        },
        computed: {
            insufficientQuantity() {
                return this.quantity > this.stock.quantity;
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