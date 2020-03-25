<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h3>Filters</h3>
                <p>To Upper Case: {{ text | toUpperCase }}</p>
                <p>To Lower Case: {{ text | toUpperCase | toLowerCase }}</p>
                <p>Capitalize: {{ secondText | capitalize }}</p>

                <hr>

                <input v-model="filterText">

                <p>List of Edible Berries</p>
                <ul>
                    <li v-for="(berry, index) in filteredBerries" :key="`berry[1]-${index}`">{{ berry }}</li>
                </ul>
            </div>
        </div>

        <hr>

    </div>
</template>

<script>
    export default {
        filters: {
            capitalize(value) {
                return !value ? '' : value.toString().charAt(0).toUpperCase() + value.toString().slice(1);
            }
        },
        data() {
            return {
                text: 'Hello there',
                secondText: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                filterText: '',
                berries: [
                            'Raspberry', 'Strawberry', 'Blackberry', 'Blueberry', 
                            'Goji berry', 'Bilberry', 'Acai berry', 'Cranberry', 
                            'Elderberry', 'Cloudberry', 'Huckleberry', 'Gooseberry',
                            'Chokeberry', 'Mulberry', 'Salmonberry', 'Saskatoon berry',
                            'Buffaloberry', 'Muscadine berry'
                        ],
            }
        },
        computed: {
            filteredBerries() {
                return this.berries.filter((berry) => {
                    return berry.toLowerCase().match(this.filterText);
                })
            }
        },
    }
</script>

<style></style>
