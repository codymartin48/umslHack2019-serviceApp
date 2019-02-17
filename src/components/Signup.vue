<template>
<div id='signup'>
    <h3>Signup</h3>
    <div>Welcome to Volunteerhub please login in or sign in</div>
        <h1>Sign Up
        </h1>
        <div>tell us your firstname, lastname, username and password</div>
        <input type="text" name="firstname" v-model="input.firstname" placeholder="firstname">
        <input type="text" name="lastname" v-model="input.lastname" placeholder="lastname">
        <input type="text" name="username" v-model="input.username" placeholder="username">
        <input type="text" name="password" v-model="input.password" placeholder="password">
        <button type="button" v-on:click="signup()">Sign up</button>
</div>
</template>

<script>
export default {
    name: 'signup',
    data (){
        return{
                input: {
                    firstname: "",
                    lastname: "",
                    username: "",
                    password: ""
                }
        }
    },
    methods: {
        signin () {
    db.collection('Volunteers').set({ 
        'FirstName': firstname, 'LastName': lastname, "volunteerID": username, "password": password 
    })
}
}
}
</script>