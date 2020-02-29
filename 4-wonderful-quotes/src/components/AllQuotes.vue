<template>
  <div class="row">
    <app-quote
      v-for="(quote, index) in quotes"
      :key="`quote[0]-${index}`"
      @click.native="deleteQuote(index)">
        {{ quote }}
    </app-quote>
  </div>

</template>

<script>
  import SingleQuote from './SingleQuote.vue';

  export default  {
    components: {
      appQuote: SingleQuote,
    },

    props: ['quotes'],

    methods: {
      deleteQuote(index) {
        this.$emit('delete:quote', index);
      }
    }
  }
</script>

<style scoped>

</style>
