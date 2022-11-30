import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/bus-show/:busId',
            name: 'Home',
            component: () => import('../views/BusShow.vue')
        }
    ],
})

export default router