<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ name }}</p>
    <p>User Age: {{ age }}</p>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
  import { eventBus } from '../main.js';

  export default {
    data() {
      return {
        oldName: "Chidinma",
      }
    },
    props: {
      name: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
      }
    },
    methods: {
      resetName() {
        this.$emit('reset:name', this.oldName);
      }
    },
    // created() {
    //   eventBus.$on('edit:age', (age) => {
    //     this.age = age;
    //   });
    // }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
