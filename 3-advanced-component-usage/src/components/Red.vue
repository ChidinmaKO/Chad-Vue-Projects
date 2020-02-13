<template>
    <div>
        <slot name="title"></slot>
        <small><em><slot name="subtitle">The Subtitle</slot></em></small>
        <hr>
        <span>
            <slot></slot>
        </span>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>