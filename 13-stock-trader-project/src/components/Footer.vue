<template>
    <div class="footer">
        <p>© 2020 
            <a href="https://github.com/ChidinmaKO">
                Chidinma Kalu
            </a>
        </p>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 5px;
        color: #F2F2F2;
        text-align: center;
        background: #0F0C29;  /* fallback for old browsers*/
        background: -webkit-linear-gradient(to right, #24243E, #302B63, #0F0C29);
        background: linear-gradient(to right, #24243E, #302B63, #0F0C29);
    }
    .footer a{
        color: #F2F2F2;
    }
</style>