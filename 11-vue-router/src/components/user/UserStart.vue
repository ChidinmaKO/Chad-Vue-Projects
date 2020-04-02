<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <routerLink to="/user/1" class="list-group-item" tag="li" style="cursor: pointer">User 1</routerLink>
            <routerLink to="/user/2" class="list-group-item" tag="li" style="cursor: pointer">User 2</routerLink>
            <routerLink to="/user/3" class="list-group-item" tag="li" style="cursor: pointer">User 3</routerLink>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                routeId: this.$route.params.id
            }
        },
    }
</script>