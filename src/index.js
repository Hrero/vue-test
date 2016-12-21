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
import "./mathjax"

/*import latex from "latextomathml"
console.log(latex.LaTeXtoMathML("(a+b)^{\\frac mn} = \\sqrt[n]{(a+b)^m}"));*/


/*$.get("/qiniu",function(data){
    console.log(data);
});*/

new Vue({
    el: '#app',
    template: '<App/>',
    router: router,
    components: {App}
})