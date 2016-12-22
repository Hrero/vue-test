import Vue from 'vue'
import vueRouter from "vue-router"
import App from './components/App'
import router from "./routes/pageConfig"


Vue.use(vueRouter);

//第三方
import "wangeditor/dist/css/wangEditor.min.css"
import "wangeditor"
import "ztree/css/zTreeStyle/zTreeStyle.css"
import 'ztree'
import "./public/semantic/semantic.min.css"
import "./public/semantic/semantic.min"
import "./mathjax"

//自定义指令
import "./order"

new Vue({
    el: '#app',
    template: '<App/>',
    router: router,
    components: {App}
})