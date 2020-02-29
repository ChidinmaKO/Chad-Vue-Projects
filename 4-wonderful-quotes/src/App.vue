<template>
    <div class="container">
      <Header
        :quoteCount="quotes.length"
        :maxQuotes="maxQuotes"
      />
      <NewQuote
        @create:quote="newQuotes"
      />
      <AllQuotes
        :quotes="quotes"
        @delete:quote="deleteQuotes"
      />
      <Footer/>
    </div>
</template>

<script>
  import AllQuotes from './components/AllQuotes.vue';
  import NewQuote from './components/NewQuote.vue';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  export default {
    components: {
      AllQuotes,
      NewQuote,
      Header,
      Footer,
    },

    data: function() {
      return {
        quotes: [],
        maxQuotes: 10,
      }
    },

    methods: {
      newQuotes(quote) {
        if(this.quotes.length >= this.maxQuotes) {
          return alert('Only 10 quotes allowed. Delete some quotes first!');
        }
        this.quotes.push(quote);
      },
      deleteQuotes(index) {
        this.quotes.splice(index, 1);
      }
    }
  }
</script>

<style>
</style>
