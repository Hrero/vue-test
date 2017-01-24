import Router from "vue-router"

//组件
//登录
import login from "../view/login"
import home from "../view/main"
//产品
import productManage from "../view/product/productManage"
//课程管理
import independentCreate from "../view/course/independent/independentCreate"
import independentIndexOf from "../view/course/independent/independentIndexOf"
import smallCourseCreate from "../view/course/small/smallCourseCreate"
import smallCourseIndexOf from "../view/course/small/smallCourseIndexOf"
import bigCourseCreate from "../view/course/big/bigCourseCreate"
import bigCourseIndexOf from "../view/course/big/bigCourseIndexOf"
//知识点录入
import knowledgeBasis from "../view/knowledge/knowledgeBasis"
import knowledgeTextbook from "../view/knowledge/knowledgeTextbook"
//数据字典
import dataSubject from "../view/data/dataSubject"
import dataStatus from "../view/data/dataStatus"
//资源
import questionsCreate from "../view/questions/questionsCreate"
import questionsIndexOf from "../view/questions/questionsIndexOf"
import videoCreate from "../view/video/videoCreate"
import videoIndexOf from "../view/video/videoIndexOf"

let router = new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        //登录
        {path: '/login', component: login},
        //首页
        {
            path: '/', component: home, children: [
            // 产品
            {path: '/product', component: productManage},
            {path: '/product/productManage', component: productManage},
            //资源
            {path: '/questions', component: questionsIndexOf},
            {path: '/questions/questionsCreate', component: questionsCreate},
            {path: '/questions/questionsIndexOf', component: questionsIndexOf},
            {path: '/questions/videoCreate', component: videoCreate},
            {path: '/questions/videoIndexOf', component: videoIndexOf},
            //知识点录入
            {path: '/knowledge', component: knowledgeBasis},
            {path: '/knowledge/knowledgeBasis', component: knowledgeBasis},
            {path: '/knowledge/knowledgeTextbook', component: knowledgeTextbook},
            //课程
            {path: '/course', component: independentIndexOf},
            {path: '/course/independentCreate', component: independentCreate},
            {path: '/course/independentIndexOf', component: independentIndexOf},
            {path: '/course/bigCourseCreate', component: bigCourseCreate},
            {path: '/course/bigCourseIndexOf', component: bigCourseIndexOf},
            {path:"/course/smallCourseCreate",component :smallCourseCreate},
            {path:"/course/smallCourseIndexOf",component :smallCourseIndexOf},
            //词典
            {path: '/data', component: dataSubject},
            {path: '/data/dataSubject', component: dataSubject},
            {path: '/data/dataStatus', component: dataStatus}
        ]
        },
    ]
});


module.exports = router;
