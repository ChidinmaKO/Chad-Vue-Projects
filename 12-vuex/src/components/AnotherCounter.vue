<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement(5)">Async Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 2, duration: 1000})">Async Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ])
        }
    }
</script>