import Vue from 'vue';
import Router from 'vue-router';
import AppHome from '@/views/AppHome';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppHome
    },
    {
        path: '/medium',
        name: 'Medium',
        component: () => import('@/views/AppMedium')
    }
];

const router = new Router({
    routes,
    mode: 'history',
    linkActiveClass: 'active',
});

Vue.use(Router);

export default router;
