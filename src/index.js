import Vue from 'vue'
import vueRouter from "vue-router"
import App from './components/App'
import router from "./routes/pageConfig"


Vue.use(vueRouter);

//第三方
import "./public/common/wangEditor/css/wangEditor.min.css"
import "./public/common/wangEditor/js/wangEditor"
import "./public/common/ztree/zTreeStyle.css"
import './public/common/ztree/jquery.ztree.all.min'
import "./public/common/semantic/semantic.min.css"
import "./public/common/semantic/semantic.min"




//自定义指令
import "./order"

new Vue({
    el: '#app',
    template: '<App/>',
    router: router,
    components: {App}
})

