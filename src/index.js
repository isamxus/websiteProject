import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import ViewUI from 'view-design';
import App from './App';
import router from './router';
import store from './stores';

//全局使用基础script
global.Vue = Vue;
global.axios = Axios;
global.ViewUI = ViewUI;
import('view-design/dist/styles/iview')
Vue.use(ViewUI);
Vue.use(Vuex);

let vm = null;
function ready(){
    vm = new Vue({
        router
        ,store
        ,components: {App}
        ,template: '<App/>'
    }).$mount('#app');
};

ready();
