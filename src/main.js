import { useUserStore } from "@/stores/userStore";
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


const app = createApp(App)

app.use(createPinia())
app.use(router)


const userStore = useUserStore();
userStore.loadUser();


app.mount('#app')

