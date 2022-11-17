<template>
    <HeaderVue/>
    <div>
        <h1>Hello Welcome to the Add Restaurent Page</h1>

        <div class="container">
            <div class="row">
                <form @submit.prevent="addRestaurent">
               <div class="form-group">
                <label for="">Resturent Name :</label>
                <input type="text" class="form-control" placeholder="Enter name..." v-model="restaurent.name" >
            </div>
            <div class="form-group">
                <label for="">Resturent Address :</label>
                <input type="text" class="form-control" placeholder="Enter address..." v-model="restaurent.address">
            </div>
            <div class="form-group">
                <label for="">Restaurent Number :</label>
                <input type="text" class="form-control" placeholder="Enter password..." v-model="restaurent.contact">
            </div>

            <button class="btn btn-primary mt-3 w-50" type="submit">Submit</button>
        </form>
            </div>
        </div>
   
    </div>
</template>

<script>
import axios from 'axios';
import HeaderVue from './Header.vue';
    export default {
        name:'AddRest',
        data() {
            return {
               restaurent:{
                name:'',
                address:'',
                contact:''
               } 
            }
        },
        methods: {
            async addRestaurent(){
                let response=await axios.post('http://localhost:3000/restaurent',{
                    name:this.restaurent.name,
                    address:this.restaurent.address,
                    contact:this.restaurent.contact
                })
                if(response.status == 201){
                    this.$router.push({name:'Home'})
                }
            }
        },
        components:{
            HeaderVue
        }
    }
</script>

<style  scoped>

</style>