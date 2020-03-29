<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>

                <hr>

                <div class="form-group">
                    <label for="name"> Username </label>
                    <input type="text" class="form-control" id="name" v-model="user.username">
                </div>

                <div class="form-group">
                    <label for="email"> Email </label>
                    <input type="email" class="form-control" id="email" v-model="user.email">
                </div>

                <button class="btn btn-primary" @click="submit">Submit</button>

                <hr>

                <button class="btn btn-primary" @click="getData">Get Data</button>
                <br><br>

                <ul class="list-group">
                    <li 
                        class="list-group-item" 
                        v-for="(user, index) in users" 
                        :key="`user[0]-${index}`"
                    >
                        {{ user.username }} - {{ user.email }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: [],
                resource: {},
            }
        },
        methods: {
            submit() {
                if(this.user.username && this.user.email) {
                    // Using normal http requests

                    // this.$http.post('data.json', this.user).then((result) => {
                    //     console.log(result);
                    // }).catch((err) => {
                    //     console.log(err)
                    // });

                    // Using custom resources
                    // this.resource.saveAlt(this.user);

                    this.resource.save({}, this.user);
                }
                this.user = {};
            },
            getData() {
                this.$http.get('data.json')
                .then((result) => {
                    return result.json();
                }).then((data) => {
                    const dataArray = [];
                    for(let key in data) {
                        dataArray.push(data[key]);
                    }

                    this.users = dataArray;
                });
            }
        },
        created() {
            // const customActions = {
            //     saveAlt: {method: 'POST', url: 'alternative.json'}
            // };
            // this.resource = this.$resource('data.json', {}, customActions);
            this.resource = this.$resource('data.json');
        },
    }
</script>

<style>
</style>
