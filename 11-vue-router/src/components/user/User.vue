<template>
    <div>
        <h1>The User Page</h1>

        <hr>

        <!-- <p>Loaded ID: {{ routeId }}</!-->

        <router-view></router-view>

        <button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
    </div>

</template>

<script>
    export default {
        // data() {
        //     return {
        //         routeId: this.$route.params.id
        //     }
        // },
        // watch: {
        //     '$route'(to, from) {
        //         this.routeId = to.params.id;
        //     }
        // },
        methods: {
            navigateToHome() {
                this.$router.push({ name: 'home'});
            }
        },
    }
</script>

<style scoped></style>