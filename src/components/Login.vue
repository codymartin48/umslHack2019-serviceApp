<template>
    <div id="login">
        <router-link  to="/dashboard/signup">SignUp</router-link>
        <div>Welcome to Volunteerhub please login in or sign in</div>
        <h1>Login</h1>
        <div>Login with useername: "username" and password: "password"</div>
       <!-- <input type="radio" name="Org-Pers" v-model="input.org" placeholder="Org"> Organizational Account
        <br>
        <input type="radio" name="Org-Pers" v-model="input.pers" placeholder="Pers"> Personal Account
        <br> -->
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == "username" && this.input.password == "password") {
                        this.$emit("authenticated", true);
                        this.$router.push("/dashboard");
                        console.log("replace")
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>