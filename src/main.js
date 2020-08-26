// Import Vue
import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import './assets/scss/main.scss';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
});
