import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//首页
const Index = () => import('~views/HomePage/index.vue');

export default new Router({
    routes:[
        {path: '/', redirect: '/Index'},
        {path: '/index', name: 'index', component: Index, meta: {title: 'Index'}}
    ]
});