import Router from "vue-router";

//组件
import MainComponent from "../views/main.vue"
//产品
import productManage from "../views/product/productManage.vue"
//课程管理
import independentCreate from "../views/course/independent/independentCreate.vue"
 import independentIndexOf from "../views/course/independent/independentIndexOf.vue"
//知识点录入
import knowledgeBasis from "../views/knowledge/knowledgeBasis.vue"
import knowledgeTextbook from "../views/knowledge/knowledgeTextbook.vue"
//数据字典
import dataSubject from "../views/data/dataSubject.vue"
import dataStatus from "../views/data/dataStatus.vue"
//资源
import questionsCreate from "../views/questions/questionsCreate.vue"
import questionsIndexOf from "../views/questions/questionsIndexOf.vue"
import videoCreate from "../views/video/videoCreate.vue"
import videoIndexOf from "../views/video/videoIndexOf.vue"

const router = new Router({
    mode: 'history',
    base: __dirname,
    routes: [
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
        { path: '/knowledge/knowledgeTextbook', component: questionsIndexOf },
        //课程
        { path: '/course', component: independentIndexOf },
        { path: '/course/independentCreate', component: independentCreate },
        { path: '/course/independentIndexOf', component: independentIndexOf },
        //词典
        { path: '/data', component: dataSubject },
        { path: '/data/dataSubject', component: dataSubject },
        { path: '/data/dataStatus', component: dataStatus }
    ]
})

module.exports = router;