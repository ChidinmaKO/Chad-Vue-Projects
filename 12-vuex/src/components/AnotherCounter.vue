<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement(5)">Async Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 2, duration: 1000})">Async Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import namespace from '../store/namespace';

    export default {
        methods: {
            ...mapActions({
                asyncIncrement: namespace.COUNTER_INCREMENT_ASYNC,
                asyncDecrement: namespace.COUNTER_DECREMENT_ASYNC
            })
        }
    }
</script>