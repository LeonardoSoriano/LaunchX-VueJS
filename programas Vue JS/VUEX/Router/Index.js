import {createTouter, createWebHashHistory }
import HomeView from '../Views/HomeView.vue'

constroutes = [
    {
        Path: '/',
        name: 'home',
        component: HomeView
    },

    {
        Path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunckName: "about" */ '../Views/AboutView.vue')

    }
]

const router = createRouter({
    history: createWebHashHistory(),
})

export default router