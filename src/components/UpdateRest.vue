<template>
    <HeaderVue/>
    <div>
        <h2>Hello welcome to the update restaurent</h2>

        <div class="container">
            <div class="row">
                <form @submit.prevent="updateRestaurent">
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

            <button class="btn btn-primary mt-3 w-50" type="submit">Update Restaurent</button>
        </form>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderVue from './Header.vue';
import axios from 'axios'

    export default {
        name:'UpdateRest',
        data() {
            return {
               restaurent:{
                name:'',
                address:'',
                contact:''
               } 
            }
        },
        components:{
            HeaderVue
        },

       async mounted() {

            const response=await axios.get('http://localhost:3000/restaurent/'+this.$route.params.id)
            this.restaurent=response.data
        },

        methods: {
            async updateRestaurent(){
                const response=await axios.put('http://localhost:3000/restaurent/'+this.$route.params.id,{
                    name:this.restaurent.name,
                    address:this.restaurent.address,
                    contact:this.restaurent.contact
                })
                if(response.status == 200){
                    this.$router.push({name:'Home'})
                }
            }
        },

    }
</script>

<style scoped>

</style>