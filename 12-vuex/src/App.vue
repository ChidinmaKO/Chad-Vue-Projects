<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <hr>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>
                <hr>
                <app-another-counter></app-another-counter>
                <hr>
                <!-- <input type="text" :value="value" @input="updateValue">
                <span>{{ value }}</span>
                <hr> -->
                <input type="text" v-model="secondValue">
                <span>{{ secondValue }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';
    import namespace from '../src/store/namespace';

    export default {
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherResult: AnotherResult,
            appAnotherCounter: AnotherCounter,
        },
        computed: {
            // value() {
            //     return this.$store.getters[namespace.VALUE];
            // },
            secondValue: {
                get() {
                    return this.$store.getters[namespace.VALUE];
                },
                set(secondValue) {
                    return this.$store.dispatch(namespace.UPDATE_VALUE, secondValue);
                }
            }
        },
        // methods: {
        //     updateValue(event) {
        //         return this.$store.dispatch(namespace.UPDATE_VALUE, event.target.value);
        //     }
        // },
    }
</script>

