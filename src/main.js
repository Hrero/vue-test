import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);
import ElementUI from 'element-ui'
Vue.use(ElementUI);


import App from './App.vue'

import 'element-ui/lib/theme-default/index.css'
import "./css/index.scss";
import "./css/app.scss";

new Vue({
    el: '#app',
    render: h => h(App)
})
