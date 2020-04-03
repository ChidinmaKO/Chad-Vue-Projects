<template>
    <div>
        <button class="btn btn-primary" @click="increment(1)">Increment</button>
        <button class="btn btn-primary" @click="decrement(1)">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import namespace from '../store/namespace';

    export default {
        methods: {
            ...mapActions({
                increment: namespace.COUNTER_INCREMENT,
                decrement: namespace.COUNTER_DECREMENT
            })
        }
    }
</script>