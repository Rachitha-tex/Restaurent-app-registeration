<template>
    <div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ">
          <a class="nav-link  " aria-current="page" href="#">Home</a>
        </li>
        <router-link :to="{name:'AddRest'}" class="nav-item mt-2 mx-2">Add Restaurent</router-link>
          <!-- <a class="nav-link" href="#">Update Restaurent</a> -->
     
        <li class="nav-item">
          <a class="nav-link" href="#" @click="logout">Logout</a>
        </li>
  
      </ul>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
    export default {
        name:'Header',
        methods: {
            logout(){
            localStorage.clear();
            this.$router.push({name:'Login'})
            }
        },
    }
</script>

<style  scoped>
.nav-item, .nav-link{
    text-decoration: none;
    color: white;
}
.nav-item:hover, .nav-link:hover {
    background: white;
    color: black;
    padding: 2px 5px;
    font-weight: bold;
}
</style>