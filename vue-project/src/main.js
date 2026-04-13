import { createApp } from 'vue'
import App from './App.vue'

// Ye niche wali line delete kar dein agar error de rahi hai
// import router from './router' 

const app = createApp(App)

// Is line ko bhi delete ya comment kar dein
// app.use(router)

app.mount('#app')