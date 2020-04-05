<template>
    <div class="container">
        <app-header></app-header>
        
        <div class="row">
            <div class="col-md-12">
                <transition
                    enter-active-class="animated fadeInLeft"
                    leave-active-class="animated fadeOut"
                    mode="out-in"
                >
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';

    export default {
        components: {
            appHeader: Header,
        },
        created() {
            this.$store.dispatch('setStocks')
        },
    }
</script>

<style>
    body {
        padding: 30px;
        background-color: #F2F2F2;
    }
</style>
