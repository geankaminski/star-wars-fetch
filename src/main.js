import Vue from 'vue';
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueRouterBackButton from 'vue-router-back-button';
import App from './App.vue';
import VueRouter from 'vue-router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import routes from './routes';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.use(VueRouterBackButton, { router });

new Vue({
  router,
  mounted () {
    //var audio = new Audio(require('./assets/song.mp3'));
    //audio.play();
 }, 
  render: h => h(App)
}).$mount('#app');

