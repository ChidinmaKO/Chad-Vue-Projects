<template>
  <div id="dashboard">
    <h1>This is the dashboard!</h1>
    <p v-if="userName">Welcome {{ userName }}</p>
    <p v-else>You should only get here if you're authenticated!</p>
  </div>
</template>

<script>
  export default {
    computed: {
      userName() {
        return this.$store.getters.user ? this.$store.getters.user.name : false;
      }
    },
    created() {
      this.$store.dispatch('fetchUser');
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