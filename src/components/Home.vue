<template>
    <div>
        <HeaderVue/>
        <h1 class="mt-4">Hello {{ name }}, Welcome to the Home Page</h1>

        <table class="table table-striped mt-3">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody v-for="restaurent in restaurents" :key="restaurent.id">
                <tr>
                    <td>{{ restaurent.id }}</td>
                    <td>{{ restaurent.name }}</td>
                    <td>{{ restaurent.contact }}</td>
                    <td>{{ restaurent.address }}</td>
                    <td>
                       <router-link :to="'/update-restaurent/'+restaurent.id">Update</router-link>
                        <button class="btn btn-danger" type="button" @click="deleteRestaurent(restaurent.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import HeaderVue from './Header.vue';
import axios from 'axios';

    export default {
        name:'Home',
        data() {
            return {
                name:'',
                restaurents:[]
            }
        },
        components:{
            HeaderVue
        },
        methods: {
           async deleteRestaurent(id){
                let response=await axios.delete('http://localhost:3000/restaurent/'+id);

                if(response.status== 200){
                }
               console.warn(id);
            },
            async loadData(){
                let user=localStorage.getItem('user-info')
                this.name=JSON.parse(user).name;

        if(!user){
           this.$router.push({name:'SignUp'}); 
        }

        let results=await axios.get('http://localhost:3000/restaurent');
        this.restaurents=results.data
      },
            },
     async mounted() {
      this.loadData();
          }
        }
        
       
</script>

<style scoped>

</style>