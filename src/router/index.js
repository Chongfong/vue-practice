import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Jobs from "@/views/Jobs.vue";
import NotFound from "@/views/NotFound.vue";
import JobDetail from "@/views/JobDetail.vue";
import AddJob from "@/views/AddJob.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: Jobs,
        },
        {
            path: '/jobs/add',
            name: 'add-job',
            component: AddJob
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound
        },
        {
            path: '/job/:id',
            name: 'job-detail',
            component: JobDetail
        }
    ]
})

export default router