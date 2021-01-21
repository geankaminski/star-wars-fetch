import Home from './components/home.vue';
import Search from './components/search.vue';
import Detail from './components/detail.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/search', component: Search },
    { path: '/detail', component: Detail },
];

export default routes;