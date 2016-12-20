import Vue from 'vue'
import vueRouter from "vue-router"

import App from './components/App'

import router from "./routes/pageConfig"


Vue.use(vueRouter);

//wangeditor
import "wangeditor/dist/css/wangEditor.min.css"
import "wangeditor"
//ztree
import "ztree/css/zTreeStyle/zTreeStyle.css"
import 'ztree'
//重置样式
import "./css/reset.scss";
//semantic-ui
import "./public/semantic/semantic.min.css"
import "./public/semantic/semantic.min"

//自定义指令
import "./order"


new Vue({
    el: '#app',
    template: '<App/>',
    router: router,
    components: {App}
})