<template>
  <div id="dashboard">
    <h1>This is the dashboard!</h1>
    <p v-if="signedIn">You should only get here if you're authenticated!</p>
    <p v-else>Welcome {{ name }}</p>
  </div>
</template>

<script>
  import axios from '../../axios-auth.js';

  export default {
    data() {
      return {
        signedIn: false,
        name: ''
      }
    },
    created() {
      axios.get('users.json')
        .then(response => {
          const usersArray = [];
          const data = response.data
          for(let key in data) {
            const user = data[key]
            user.id = key
            usersArray.push(user)
          }
          this.name = usersArray[usersArray.length -1].name;
        })
        .catch(console.error());
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