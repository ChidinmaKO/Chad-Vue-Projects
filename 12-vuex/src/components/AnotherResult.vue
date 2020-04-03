<template>
    <div>
        <p>Second Counter is: {{ doubleCounter }}</p>
        <br><br>
        <p>Number of Clicks: {{ stringCounter }}</p>
        
    </div>
    
</template>

<script>
    import { mapGetters } from 'vuex';
    import namespace from '../store/namespace'

    export default {
        computed: {
            ...mapGetters({
                doubleCounter: namespace.DOUBLE_COUNTER,
                stringCounter: namespace.STRING_COUNTER
            })
        }
    }
</script>