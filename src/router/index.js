import {createRouter, createWebHistory} from "vue-router"
import HomeView from "@/views/HomeView.vue"
import JobsView from "@/views/JobsView.vue"
import NotFoundView from "@/views/NotFoundView.vue"
import JobView from "@/views/JobView.vue"
import AddJobView from "@/views/AddJobView.vue"
import EditJobView from "@/views/EditJobView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeView,
            meta: { title: 'Home page' }
        },
        {
            path: '/jobs',
            component: JobsView,
            meta: { title: 'Jobs page' }
        },
        {
            path: '/jobs/:id',
            component: JobView,
            meta: { title: 'Job page' }
        },
        {
            path: '/jobs/add',
            component: AddJobView,
            meta: { title: 'Add job page' }
        },
        {
            path: '/jobs/edit/:id',
            component: EditJobView,
            meta: { title: 'Edit job page' }
        },
        {
            path: '/:catchAll(.*)',
            component: NotFoundView,
            meta: { title: 'Not found' }
        }
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'My Vue App';
    next();
})

export default router
