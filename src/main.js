import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import VueSnip from 'vue-snip'

createApp(App).use(router).use(VueSnip).mount('#app')