<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponent = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent = 'appRed'">Load Red Template</button>
                <hr>
                <component :is="selectedComponent">
                    <h3 slot="title"> Template </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ultricies tristique nulla aliquet enim tortor at. 
                        Morbi quis commodo odio aenean sed adipiscing.
                        Et ligula ullamcorper malesuada proin libero. 
                        Habitant morbi tristique senectus et netus et malesuada fames ac.
                    </p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data() {
            return {
                selectedComponent: 'appBlue',
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
