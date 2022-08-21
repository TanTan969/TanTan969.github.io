import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"


const axios = require('axios').default;
axios.defaults.baseURL = 'https://fakestoreapi.com'
createApp(App).use(router,axios).mount('#app')

import "bootstrap/dist/js/bootstrap.bundle.min.js"
