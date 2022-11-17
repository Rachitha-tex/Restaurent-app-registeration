import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

createApp(App).use(router).mount('#app')
