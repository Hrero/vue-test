<template>
    <div style="position: relative;" class="categoriesBox">
        <label>上课形式</label>
        <input type="text" v-model="name" readonly="readonly" class="form-control" placeholder="课程类别"
               @focus="showBox()"/>
        <input type="hidden" v-model="code"/>
        <div :id="dataId" v-show="isShow" class="ztree" :style="style" @mouseleave="hideBox()"></div>
    </div>
</template>

<script>
    import independent from "../../utils/course/independent"
    export default{
        props: {
            dataId: {
                type: String,
                twoWay: true
            }
        },
        data () {
            return {
                style: {
                    position: "absolute",
                    top: "60px",
                    left: 0,
                    background: "rgb(136, 226, 225)",
                    width: "350px",
                    zIndex: "9999"
                },
                name: "",
                code: "",
                isShow: false
            }
        },
        methods: {
            showBox () {
                this.isShow = true;
            },
            hideBox () {
                this.isShow = false;
            }
        },
        created () {
            var self = this;
            $.get("/course/independent/courseCategoriesGetAll").then((result) => {
                let data = JSON.parse(result);
                // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
                var setting = {
                    view: {
                        showLine: true,
                        showIcon: true,
                        selectedMulti: false
                    },
                    data: {
                        simpleData: {
                            enable: true,
                            idKey: 'ctbCode',
                            pIdKey: 'parent',
                            rootPid: '0'
                        },
                        key: {
                            name: 'name',
                            title: 'name'
                        }
                    },
                    callback: {
                        onClick: selectCategories
                    }
                };

                function selectCategories(event, treeId, treeNode) {
                    console.log(treeNode);
                    self.name = treeNode.name;
                    self.code = treeNode.ctbCode;
                    self.isShow = false;
                    self.$emit("increment", treeNode.name, treeNode.ctbCode);
                }

                // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
                var zTreeObj = $.fn.zTree.init($("#" + self.dataId), setting, data);
                //展开节点
                zTreeObj.expandAll(true);
            });
        }
    }
</script>