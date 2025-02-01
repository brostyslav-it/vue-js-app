import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import Jobs from "@/views/Jobs.vue";
import NotFound from "@/views/NotFound.vue";

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: Jobs
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound
        }
    ]
});
