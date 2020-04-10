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

        <app-footer class="footer"></app-footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';

    export default {
        components: {
            appHeader: Header,
            appFooter: Footer,
        },
        created() {
            this.$store.dispatch('initStocks');
        },
    }
</script>

<style>
    body {
        padding: 30px;
        background-color: #F2F2F2;
        color: #232526;
    }
</style>
