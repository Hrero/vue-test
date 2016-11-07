<template>
    <div id="main" class="positionCenter">
        <h2>易教空间资源库系统录入平台</h2>
        <el-menu theme="dark" default-active="0" class="el-menu-demo" mode="horizontal">
            <el-menu-item :index="index.toString()" v-for="(val, key, index) in sideBarData" :data-name="key" @click.native="showSideBar($event)">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="val[0].icon"></use>
                </svg>
                {{val[0].name}}
            </el-menu-item>
        </el-menu>
        <el-col :span="2">
            <el-menu mode="vertical" default-active="" class="el-menu-vertical-demo" v-for="(item, index) in sideBar[0].children">
                <el-menu-item-group :title="item.sideBarH">
                    <el-menu-item :index="indexC.toString()" v-for="(itemC, indexC) in item.list"><router-link :to="itemC.href"><i class="el-icon-message"></i>{{itemC.sideBarName}}</router-link></el-menu-item>
                </el-menu-item-group>
            </el-menu>
        </el-col>
        <el-col :span="22" class="contentBox">
            <router-view></router-view>
        </el-col>
    </div>
</template>

<script>
    import "../css/main.scss";
    import "../iconfont/iconfont.js"
    export default {
        data () {
            return {
                sideBar: [],
                sideBarData: {
                    product: [
                        {
                            name:"产品",
                            icon:"#icon-caidan",
                            children: [
                                {
                                    sideBarH: "产品管理",
                                    list:[
                                        {sideBarName: "产品管理",href:"/productManage"}
                                    ]
                                }
                            ]
                        }
                    ],
                    resource: [
                        {
                            name:"资源",
                            icon:"#icon-fangzi",
                            children: [
                                {
                                    sideBarH: "试题",
                                    list:[
                                        {sideBarName: "创建试题",href:"/questionsCreate"},
                                        {sideBarName: "试题检索",href:"/questionsIndexOf"}
                                    ]
                                },
                                {
                                    sideBarH: "视频",
                                    list:[
                                        {sideBarName: "视频录入",href:"/videoCreate"},
                                        {sideBarName: "视频查询",href:"/videoIndexOf"}
                                    ]
                                }
                            ]
                        }
                    ],
                    knowledge: [
                        {
                            name:"知识点录入",
                            icon:"#icon-luru",
                            children: [
                                {
                                    sideBarH: "知识点录入",
                                    list:[
                                        {sideBarName: "基础知识点",href:"/knowledgeBasis"},
                                        {sideBarName: "教材知识点",href:"/knowledgeTextbook"}
                                    ]
                                }
                            ]
                        }
                    ],
                    classes: [
                        {
                            name:"课程管理",
                            children: [
                                {
                                    sideBarH: "独立课程",
                                    list:[
                                        {sideBarName: "创建独立课程",href:"/independentCreate"},
                                        {sideBarName: "独立课程检索",href:"/independentIndexOf"}
                                    ]
                                }
                            ]
                        }
                    ],
                    datas: [
                        {
                            name:"数据字典",
                            icon:"#icon-zidian",
                            children: [
                                {
                                    sideBarH: "数据字典",
                                    list:[
                                        {sideBarName: "学年管理",href:"/dataSubject"},
                                        {sideBarName: "学段管理",href:"/dataStatus"}
                                    ]
                                }
                            ]
                        }
                    ]
                },
            }
        },
        methods: {
            showSideBar (event) {
                var sideBar = event.target.getAttribute("data-name");
                this.sideBar = this.sideBarData[sideBar];
            }
        },
        created () {
            this.sideBar = this.sideBarData.product;
        }
    }
</script>