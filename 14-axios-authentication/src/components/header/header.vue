<template>
  <header id="header">
    <div class="logo">
      <router-link to="/">Vue - Complete Guide</router-link>
    </div>
    <nav>
      <ul>
        <li v-if="!isAuthenticated">
          <router-link to="/signup">Sign Up</router-link>
        </li>
        <li v-if="!isAuthenticated">
          <router-link to="/signin">Sign In</router-link>
        </li>
        <li v-if="isAuthenticated">
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
        <li v-if="isAuthenticated">
          <button @click="onLogOut" class="logout">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    computed: {
      isAuthenticated() {
        return this.$store.getters.isAuthenticated;
      }
    },
    methods: {
      onLogOut() {
        this.$store.dispatch('logOutUser');
      }
    },
  }
</script>

<style scoped>
  #header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #521751;
    padding: 0 20px;
  }

  .logo {
    font-weight: bold;
    color: #FFFFFF;
  }

  .logo a {
    text-decoration: none;
    color: #FFFFFF;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li {
    margin: 0 16px;
  }

  li a {
    text-decoration: none;
    color: #FFFFFF;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #FA923F;
  }

  .logout {
    font: inherit;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
</style>