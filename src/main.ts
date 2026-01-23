import { createHead } from '@unhead/vue/server';
import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import vuetify from './plugins/vuetify';
import router from './router';


createApp(App)
  .use(router)
  .use(vuetify)
  .use(i18n)
  .use(createHead())
  .mount('#app')