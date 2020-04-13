<template>
  <div id="dashboard">
    <h1>This is the dashboard!</h1>
    <p>{{ dashboardMsg() }}</p>
  </div>
</template>

<script>
  export default {
    methods: {
      dashboardMsg() {
        return this.userName ? "Welcome " + this.userName : "You should only get here if you're authenticated!";
      }
    },
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
    font-weight: 700;
  }
</style>