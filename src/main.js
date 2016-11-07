import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);
import ElementUI from 'element-ui'
Vue.use(ElementUI);
import Router from "vue-router";
Vue.use(Router);
import Resource from 'vue-resource'
Vue.use(Resource);
require('ztree');


import App from './App.vue'

import 'element-ui/lib/theme-default/index.css'
import "ztree/css/zTreeStyle/zTreeStyle.css"
import "./css/index.scss";
import "./css/app.scss";

//路由
import router from "./config/router.js"

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})
