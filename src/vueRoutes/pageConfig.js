import Router from "vue-router"

//组件
 //登录
/* import login from "../view/login"*/
 import home from "../view/home"
 //产品
 /* import productManage from "../view/product/productManage"
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
 import videoIndexOf from "../view/video/videoIndexOf"*/

let router = new Router({
    mode: 'history',
    base: __dirname,
    routes: [{
            //登录
            path: '/login', component: resolve => {
                require(["../view/login"], resolve)
            }
        },{
            path: '/', component: home, children: [{
                // 产品
                path: '/product', component: resolve => {
                    require(["../view/product/productManage"], resolve)
                }
            }, {
                path: '/product/productManage', component: resolve => {
                    require(["../view/product/productManage"], resolve)
                }
            },{
                //资源
                path: '/questions', component: resolve => {
                    require(["../view/questions/questionsCreate"], resolve)
                }
            }, {
                path: '/questions/questionsCreate', component: resolve => {
                    require(["../view/questions/questionsCreate"], resolve)
                }
            }, {
                path: '/questions/questionsIndexOf', component: resolve => {
                    require(["../view/questions/questionsIndexOf"], resolve)
                }
            }, {
                path: '/questions/videoCreate', component: resolve => {
                    require(["../view/video/videoCreate"], resolve)
                }
            }, {
                path: '/questions/videoIndexOf', component: resolve => {
                    require(["../view/video/videoIndexOf"], resolve)
                }
            }, {
                //知识点录入
                path: '/knowledge', component: resolve => {
                    require(["../view/knowledge/knowledgeBasis"], resolve)
                }
            }, {
                path: '/knowledge/knowledgeBasis', component: resolve => {
                    require(["../view/knowledge/knowledgeBasis"], resolve)
                }
            }, {
                path: '/knowledge/knowledgeTextbook', component: resolve => {
                    require(["../view/knowledge/knowledgeTextbook"], resolve)
                }
            }, {
                //课程
                path: '/course', component: resolve => {
                    require(["../view/course/independent/independentIndexOf"], resolve)
                }
            }, {
                path: '/course/independentCreate', component: resolve => {
                    require(["../view/course/independent/independentCreate"], resolve)
                }
            }, {
                path: '/course/independentIndexOf', component: resolve => {
                    require(["../view/course/independent/independentIndexOf"], resolve)
                }
            }, {
                path: '/course/bigCourseCreate', component: resolve => {
                    require(["../view/course/big/bigCourseCreate"], resolve)
                }
            }, {
                path: '/course/bigCourseIndexOf', component: resolve => {
                    require(["../view/course/big/bigCourseIndexOf"], resolve)
                }
            }, {
                path: "/course/smallCourseCreate", component: resolve => {
                    require(["../view/course/small/smallCourseCreate"], resolve)
                }
            }, {
                path: "/course/smallCourseIndexOf", component: resolve => {
                    require(["../view/course/small/smallCourseIndexOf"], resolve)
                }
            }, {
                //词典
                path: '/data', component: resolve => {
                    require(["../view/data/dataSubject"], resolve)
                }
            }, {
                path: '/data/dataSubject', component: resolve => {
                    require(["../view/data/dataSubject"], resolve)
                }
            }, {
                path: '/data/dataStatus', component: resolve => {
                    require(["../view/data/dataStatus"], resolve)
                }
            }]
        },
    ]
});


module.exports = router;
