import Vue from 'vue'
import Router from "vue-router";
Vue.use(Router);
import Resource from 'vue-resource'
Vue.use(Resource);
import $ from 'expose?$!jquery'
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//wangeditor
import "wangeditor/dist/css/wangEditor.min.css"
import "wangeditor"
//ztree
import "ztree/css/zTreeStyle/zTreeStyle.css"
import 'ztree'


import App from './views/App.vue'
import "./css/app.scss";

//重置样式
import "./css/reset.scss";



//路由
import routes from "./routes/pageConfig.js"

//全选命令
Vue.directive('isChecked', {
    bind: function (binding) {
       console.log(binding.value);
    }
})


new Vue({
    el: '#app',
    router: routes,
    render: h => h(App)
})
