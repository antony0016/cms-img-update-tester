import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/bus-show/:busId',
            name: 'bus show',
            component: () => import('../views/BusShow.vue')
        },
        {
            path: '/',
            name: 'console',
            component: () => import('../views/Console.vue')
        },
    ],
})

export default router