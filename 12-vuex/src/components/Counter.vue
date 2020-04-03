<template>
    <div>
        <button class="btn btn-primary" @click="increment(1)">Increment</button>
        <button class="btn btn-primary" @click="decrement(1)">Decrement</button>
    </div>
</template>

<script>
    // import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement'
            ])

            // ...mapMutations([
            //     'increment',
            //     'decrement'
            // ])

            // increment() {
            //     this.$store.commit('increment');
            // },
            // decrement() {
            //     this.$store.commit('decrement')
            // }
            
            // increment() {
            //     this.$store.state.counter++;
            // },
            // decrement() {
            //     this.$store.state.counter--;
            // }
        }
    }
</script>