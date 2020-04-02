<template>
    <div>
        <h3>Some User Details</h3>
        <br><br>

        <h4>User {{ route.routeId }}</h4>
        <p>
            Ab asperiores, aut autem, blanditiis consequuntur dolore excepturi laborum maiores 
            minima nihil non nulla obcaecati quas quibusdam quod sed suscipit vero voluptatem.
        </p>

        <br><br>

        <!-- one way -->
        <!-- <router-link :to="dynamicPath()" tag="button" class="btn btn-primary">Edit User</router-link> -->

        <!-- another way -->
        <router-link 
            :to="{ name: route.name, params: { id: route.routeId }, query: { locale: route.query.locale } }" 
            tag="button" class="btn btn-primary">

            Edit User
        </router-link>
        <hr>

        <button class="btn btn-info" @click="backToUsers">Back to all Users</button>
        <hr>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                route: {
                    name: 'userEdit',
                    routeId: this.$route.params.id,
                    query: {
                        locale: 'en'
                    },
                    hash: '#data'
                }
            }
        },
        methods: {
            backToUsers() {
                this.$router.push('/user');
            },
            dynamicPath() {
                return '/user/' + this.route.routeId + '/edit';
            }
        },
        // beforeRouteEnter (to, from, next) {
        //     console.log("before route enter");
        //     next();
        // }
    }
</script>