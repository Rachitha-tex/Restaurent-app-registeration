import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import AddRest from './components/AddRest.vue'
import UpdateRest from './components/UpdateRest.vue'

import { createRouter,createWebHistory } from 'vue-router'

const routes=[
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'AddRest',
        component:AddRest,
        path:'/add-restaurent'
    },
    {
        name:'UpdateRest',
        component:UpdateRest,
        path:'/update-restaurent/:id'
    },
];

const router=createRouter({
    history:createWebHistory(),
    routes
}); 

export default router;