<template>
    <nav class="navbar navbar-default blue">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link tag="a" to="/" exact class="navbar-brand">Stock Trader</router-link>   
            </div>
        
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" tag="li" active-class="active" class="router"><a>Portfolio</a></router-link>
                    <router-link to="/stocks" active-class="active" tag="li"  class="router"><a>Stocks</a></router-link>
                </ul>

                <strong class="navbar-text navbar-right">Funds: {{ funds | toCurrency }}</strong>

                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="endDay()">End Day</a></li>
                    <li 
                        class="nav-item dropdown"
                        :class="{ open : isDropDownOpen }"
                        @click="toggleDropDown()"
                    >
                        <a 
                            class="nav-link dropdown-toggle" 
                            href="#" id="navbarDropdownMenuLink" 
                            role="button" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false"
                        >
                        Save & Load
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Save Data</a></li>
                            <li><a class="dropdown-item" href="#">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                isDropDownOpen: false,
            }
        },
        methods: {
            ...mapActions([
                'randomizeStocks'
            ]),
            endDay() {
                this.randomizeStocks();
            },
            toggleDropDown() {
                this.isDropDownOpen = !this.isDropDownOpen;
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
    }
</script>

<style scoped>
    /* .blue {
        background-color: #302B63; 
    }
    .navbar-default .navbar-nav>li>a {
        color: #e7e7e7;
    } */
    
</style>