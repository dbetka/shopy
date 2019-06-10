import Vue from 'vue'
import Router from 'vue-router'
import AboutUs from './components/pages/AboutUs.vue'
import Skicams from './components/pages/Skicams'
import Contact from './components/pages/Contact'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'aboutUs',
            component: AboutUs,
        },
        {
            path: '/skicams',
            name: 'skicams',
            component: Skicams,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
    ],
})
