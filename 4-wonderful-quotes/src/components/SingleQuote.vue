<template>
  <div class="SingleQuotes col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default">
      <div class="panel-body quote">
        <slot></slot>
      </div>
    </div>
  </div>

</template>

<script>
  export default {}
</script>

<style scoped>
  .SingleQuotes {
    --color: #6E6E6E;
    --hover-color: #B0DAB9;
    --font-family: 'Courgette', cursive;
  }

  .panel-body {
    font-family: var(--font-family);
    font-size: 24px;
    color: var(--color);
  }

  .quote {
    cursor: pointer;
  }

  .quote:hover {
    background-color: var(--hover-color);
  }
</style>
