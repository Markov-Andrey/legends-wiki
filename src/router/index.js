import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '@/pages/Home.vue'
import Legends from "@/pages/Legends.vue";
import Legend from "@/pages/Legend.vue";
import Maps from "@/pages/Maps.vue";
import Mythic from "@/pages/Mythic.vue";
import Items from "@/pages/Items.vue";

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/legends',
        name: 'Legends',
        component: Legends,
    },
    {
        path: "/legends/:legend",
        name: "legend",
        component: Legend,
    },
    {
        path: "/maps",
        name: "maps",
        component: Maps,
    },
    {
        path: "/mythic",
        name: "mythic",
        component: Mythic,
    },
    {
        path: "/items",
        name: "items",
        component: Items,
    },
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
