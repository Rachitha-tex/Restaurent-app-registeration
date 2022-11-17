<template>
        <img src="../assets/logo.png" alt="">
        <h1>Signup Form</h1>

        <div class="register">
            <input type="text" name="name" placeholder="name...." v-model="name" autocomplete="off">
            <input type="email" name="email" placeholder="email...." v-model="email" autocomplete="off">
            <input type="password" name="password" placeholder="password...." v-model="password" autocomplete="off">
            <button @click="signUp">Signup</button>
            <p>
            <router-link :to="{name:'Login'}">Login</router-link>
        </p>

        </div>
</template>

<script>
import axios from 'axios'

    export default {
      name:'SignUp',
      data() {
        return {
            name:'',
            email:'',
            password:''
        }
      },
      methods:{
        async signUp(){
            let result=await axios.post('http://localhost:3000/users',{
               email:this.email,
               name:this.name,
               password:this.password 
            })
            
            console.log(result);
            if(result.status === 201){
                this.$router.push({name:"Home"})

                localStorage.setItem('user-info',JSON.stringify(result.data))
                this.name=""
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

<style  scoped>
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.register button{
    width: 320px;
    height: 40px;
    padding: 10px;
    cursor: pointer;
    border: 1px solid skyblue;
    color: #fff;
    background: skyblue;
}
</style>