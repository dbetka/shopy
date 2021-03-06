import Vue from 'vue'
import Router from 'vue-router'
import Products from '#/pages/Products'
import Contact from '#/pages/Contact'
import Article from '#/pages/Article'
import About from '#/pages/About'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'products',
            component: Products,
            showCart: true,
        },
        {
            path: '/article/:id',
            name: 'article',
            component: Article,
            showCart: true,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            showCart: false,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
            showCart: false,
        },
    ],
})
