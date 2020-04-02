<template>
    <div>
        <h3>Edit the User</h3>

        <br><br>

        <h4>This is User {{ routeId }}</h4>
        <br>
        <h5>Locale: {{ locale }}</h5>

        <hr>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <hr>

        <button class="btn btn-info" @click="backToUserDetails">Back to User Details</button>

        <hr>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                routeId: this.$route.params.id,
                locale: this.$route.query.locale.toUpperCase(),
                confirmed: false,
            }
        },
        methods: {
            backToUserDetails() {
                const path = '/user/' + this.routeId;
                this.$router.push(path);
            }
        },
        beforeRouteLeave (to, from, next) {
            if(this.confirmed) {
                next();
            } else {
                return confirm("Are you sure?") ? next() : next(false);
            }
        }
    }
</script>