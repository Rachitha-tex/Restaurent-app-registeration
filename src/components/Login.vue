<template>
     <img src="../assets/logo.png" alt="">
        <h1>SignIn Form</h1>
    <div class="login">
        <input type="email" name="email" placeholder="email...." v-model="email">
        <input type="password" name="password" placeholder="password...." v-model="password">
        <button @click="login">SignIn</button>
        <p>
            <router-link :to="{name:'SignUp'}">Signup</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name:'Login',
        data() {
            return {
                email:'',
                password:''
            }
        },

        methods: {
            async login(){
                let result=await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)

                if(result.status === 200 && result.data.length>0){
                this.$router.push({name:"Home"})

                localStorage.setItem('user-info',JSON.stringify(result.data))
                this.email=""
                this.password=""

            }
            }
        },
        mounted() {
        let user=localStorage.getItem('user-info')

        if(user){
           this.$router.push({name:'Home'}); 
        }
      },
    }
</script>

<style scoped>
.login input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.login button{
    width: 320px;
    height: 40px;
    padding: 10px;
    cursor: pointer;
    border: 1px solid skyblue;
    color: #fff;
    background: skyblue;
}
</style>