import Router from "vue-router";

//组件
//产品
import productManage from "../components/product/productManage.vue"
//课程管理
import independentCreate from "../components/independent/independentCreate.vue"
import independentIndexOf from "../components/independent/independentIndexOf.vue"
//知识点录入
import knowledgeBasis from "../components/knowledge/knowledgeBasis.vue"
import knowledgeTextbook from "../components/knowledge/knowledgeTextbook.vue"
//数据字典
import dataSubject from "../components/data/dataSubject.vue"
import dataStatus from "../components/data/dataStatus.vue"
//资源
import questionsCreate from "../components/questions/questionsCreate.vue"
import questionsIndexOf from "../components/questions/questionsIndexOf.vue"
import videoCreate from "../components/video/videoCreate.vue"
import videoIndexOf from "../components/video/videoIndexOf.vue"

const router = new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/productManage',
            component: productManage
        },
        {
            path: '/questionsCreate',
            component: questionsCreate
        },
        {
            path: '/questionsIndexOf',
            component: questionsIndexOf
        },
        {
            path: '/videoCreate',
            component: videoCreate
        },
        {
            path: '/videoIndexOf',
            component: videoIndexOf
        },
        {
            path: '/knowledgeBasis',
            component: knowledgeBasis
        },
        {
            path: '/knowledgeTextbook',
            component: knowledgeTextbook
        },
        {
            path: '/independentCreate',
            component: independentCreate
        },
        {
            path: '/independentIndexOf',
            component: independentIndexOf
        },
        {
            path: '/dataSubject',
            component: dataSubject
        },
        {
            path: '/dataStatus',
            component: dataStatus
        }
    ]
})

module.exports = router;