<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>

                <hr>

                <Header/>

                <transition name="slide" mode="out-in">
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
            Header
        }
    }
</script>

<style scoped>
    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in .5s ease-out forwards;
        transition: opacity .5s;
    }
    .slide-leave-active {
        animation: slide-out .45s ease-out forwards;
        transition: opacity .45s;
        opacity: 0;
        position: absolute;
    }

    @keyframes slide-in {
        from {
            transform: translateX(20px);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-20px);
        }
    }
</style>
