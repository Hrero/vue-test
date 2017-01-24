import Vue from 'vue'
import vueRouter from "vue-router"
import App from './view/App'
import router from "./vueRoutes/pageConfig"


Vue.use(vueRouter);

//第三方
import "./external/wangEditor/css/wangEditor.min.css"
import "./external/wangEditor/js/wangEditor"
import "./external/ztree/zTreeStyle.css"
import './external/ztree/jquery.ztree.all.min'
import "./external/semantic/semantic.min.css"
import "./external/semantic/semantic.min"




//自定义指令
import "./vue/order"

new Vue({
    el: '#app',
    template: '<App/>',
    router: router,
    components: {App}
})

