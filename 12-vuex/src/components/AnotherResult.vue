<template>
    <div>
        <p>Second Counter is: {{ doubleCounter }}</p>
        <br><br>
        <p>Number of Clicks: {{ stringCounter }}</p>
        
    </div>
    
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'doubleCounter',
                'stringCounter',
            ])
        }
    }
</script>