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

                <strong class="navbar-text navbar-right">Funds: {{ funds }}</strong>

                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" class="router">End Day</a></li>
                    <li class="nav-item dropdown router">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Save & Load
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Save Data</a>
                            <a class="dropdown-item" href="#">Load Data</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
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