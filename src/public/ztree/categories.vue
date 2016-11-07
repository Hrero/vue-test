<template>
    <el-form-item label="上课形式">
        <el-input v-model="name" v-on:focus="showBox()" placeholder="上课形式"></el-input>
        <el-input v-model="code" placeholder="上课形式" type="hidden"></el-input>
        <!--<categories :data-show="flag.categories" data-id="categoriesCodeZtree" v-on:increment="incrementTotal"></categories>-->
        <div :id="dataId"  v-show="dataShow" class="ztree" :style="style"></div>
    </el-form-item>
</template>

<script>
    import $ from 'expose?$!jquery'
    import 'ztree'
    export default{
        props: {
            dataId: {
                type: String,
                twoWay: true
            }
        },
        data () {
            return {
                style:{
                    position: "absolute",
                    top: "40px",
                    left: 0,
                    background: "rgb(136, 226, 225)",
                    width: "350px",
                    zIndex: "9999"
                },
                dataShow: false,
                name: "",
                code: ""
            }
        },
        methods: {
            showBox () {
                this.dataShow = true;
            }
        },
        created () {
            var self = this;
            this.$http.get("/courseCategoriesGetAll").then((result) => {
                var data = result.data;
                console.log(data);
                // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
                var setting = {
                    view : {
                        showLine : true,
                        showIcon : true,
                        selectedMulti : false
                    },
                    data : {
                        simpleData : {
                            enable : true,
                            idKey : 'ctbCode',
                            pIdKey : 'parent',
                            rootPid : '0'
                        },
                        key : {
                            name : 'name',
                            title : 'name'
                        }
                    },
                    callback : {
                        onClick:selectCategories
                    }
                };
                function selectCategories(event, treeId, treeNode) {
                    console.log(treeNode);
                    self.name = treeNode.name;
                    self.code = treeNode.ctbCode;
                    self.dataShow = false;
                    self.$emit("increment",treeNode.name,treeNode.ctbCode);
                }
                // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
                var zTreeObj = $.fn.zTree.init($("#"+self.dataId), setting, data);
                //展开节点
                zTreeObj.expandAll(true);
                console.log(zTreeObj)
            });
        }
    }
</script>