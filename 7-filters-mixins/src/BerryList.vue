<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h3>Mixins</h3>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col-md-6">
                <input v-model="filterText">

                <h4>List of Edible Berries</h4>
                <ul>
                    <li v-for="(berry, index) in filteredBerries" :key="`berry[1]-${index}`">{{ berry }}</li>
                </ul>
            </div>

            <div class="col-md-6">
                <input v-model="filterNonEdibleText">

                <h4>List of Non-edible Berries</h4>
                <ul>
                    <li v-for="(berry, index) in filteredNonEdibleBerries" :key="`berry[1]-${index}`">{{ berry }}</li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    import { berryMixin } from './mixins/berryMixin.js'

    export default {
        mixins: [berryMixin],
        data() {
            return {
                filterNonEdibleText: '',
                nonEdibleBerries: [
                            'Holly berry', 'Mistletoe', 'Jerusalem cherry', 'Bittersweet', 
                            'Pokeweed berry', 'Ivy berry', 'Yew berry', 'Virginia creeper berry'
                        ],
            }
        },
        computed: {
            filteredNonEdibleBerries() {
                return this.nonEdibleBerries.filter((berry) => {
                    return berry.toLowerCase().match(this.filterNonEdibleText);
                })
            }
        },
    }
</script>

<style></style>
