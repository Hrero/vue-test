import Router from "vue-router"

//组件
//登录
import login from "../components/login"
import home from "../components/main"
//产品
import productManage from "../components/product/productManage"
//课程管理
import independentCreate from "../components/course/independent/independentCreate"
 import independentIndexOf from "../components/course/independent/independentIndexOf"
//知识点录入
import knowledgeBasis from "../components/knowledge/knowledgeBasis"
import knowledgeTextbook from "../components/knowledge/knowledgeTextbook"
//数据字典
import dataSubject from "../components/data/dataSubject"
import dataStatus from "../components/data/dataStatus"
//资源
import questionsCreate from "../components/questions/questionsCreate"
import questionsIndexOf from "../components/questions/questionsIndexOf"
import videoCreate from "../components/video/videoCreate"
import videoIndexOf from "../components/video/videoIndexOf"

let router = new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        //登录
        { path: '/login', component: login },
        //首页
        { path: '/', component: home, children: [
            // 产品
            { path: '/product', component: productManage },
            { path: '/product/productManage', component: productManage },
            //资源
            { path: '/questions', component: questionsIndexOf },
            { path: '/questions/questionsCreate', component: questionsCreate },
            { path: '/questions/questionsIndexOf', component: questionsIndexOf },
            { path: '/questions/videoCreate', component: videoCreate },
            { path: '/questions/videoIndexOf', component: videoIndexOf },
            //知识点录入
            { path: '/knowledge', component: knowledgeBasis },
            { path: '/knowledge/knowledgeBasis', component: knowledgeBasis },
            { path: '/knowledge/knowledgeTextbook', component: knowledgeTextbook },
            //课程
            { path: '/course', component: independentIndexOf },
            { path: '/course/independentCreate', component: independentCreate },
            { path: '/course/independentIndexOf', component: independentIndexOf },
            //词典
            { path: '/data', component: dataSubject },
            { path: '/data/dataSubject', component: dataSubject },
            { path: '/data/dataStatus', component: dataStatus }
        ] },
    ]
});


module.exports = router;
