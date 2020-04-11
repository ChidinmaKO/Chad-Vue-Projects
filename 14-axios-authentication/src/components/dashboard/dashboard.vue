<template>
  <div id="dashboard">
    <h1>This is the dashboard!</h1>
    <p v-if="signedOut">You should only get here if you're authenticated!</p>
    <p v-else>Welcome {{ name }}</p>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        signedOut: true,
        name: ''
      }
    },
    created() {
      
    },
  }
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>