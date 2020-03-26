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

                <input v-model="inputText">
                <span>{{ inputText | reverseText | countLength }}</span>

                <hr>

                <span>Family Name for Berry: {{ berryFamilyName }} </span>
                <br>
                <span>Reversed Family Name for Berry: {{ reversed }}</span>

                <hr>

                <input v-model="filterText">

                <h4>List of Edible Berries</h4>
                <ul>
                    <li v-for="(berry, index) in filteredBerries" :key="`berry[1]-${index}`">{{ berry }}</li>
                </ul>
            </div>
        </div>

        <hr>

        <BerryList/>

    </div>
</template>

<script>
    import BerryList from './BerryList.vue';
    import { berryMixin } from './mixins/berryMixin.js';

    export default {
        mixins: [berryMixin],
        components: {
            BerryList,
        },
        filters: {
            capitalize(value) {
                return !value ? '' : value.toString().charAt(0).toUpperCase() + value.toString().slice(1);
            },
            reverseText(value) {
                return !value ? '' : value.toString().split("").reverse().join("");
            }
        },
        data() {
            return {
                text: 'Hello there',
                secondText: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                inputText: '',
                berryFamilyName: 'Ericaceae',
            }
        },
    }
</script>

<style></style>
