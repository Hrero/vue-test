<template>
    <div id="product">
        zTree1
        <ztree id="zTree1" :methods="methods" :ztreeData="ztreeData" :ztreeAjax="ztreeAjax"></ztree>
        zTree2
        <ztree id="zTree2" :methods="methods" :ztreeData="ztreeData" :ztreeAjax="ztreeAjax"></ztree>
    </div>
</template>

<script>
    import ztree from "../../../components/ztree/toolZtree.vue"
    export default {
        data () {
            return {
                masger: "组件independentIndexOf",
                ztreeAjax: {
                    url: "/course/independent/getAllKnowlege",
                    params: {
                        gradeCode: 33,
                        subjectCode: 1,
                        booktypeCode: "7HCcMZTzpcThi6RaByWysKQPPbtTHSj8"
                    },
                    type: "post"
                },
                methods: {
                    click: function (event, treeId, treeNode) {
                        console.log(treeNode);
                    },
                    remove: function (event, treeId, treeNode) {
                        console.log("删除节点：" + treeNode.knowledgeName);
                    },
                    update: function (event, treeId, treeNode) {
                        console.log("更新节点");
                    },
                    add: function (event, treeId, treeNode) {
                        console.log("添加节点");
                    },
                    resource: function (event, treeId, treeNode) {
                        console.log("自定义节点");
                    },
                    conditionAdd: function (treeId, treeNode) {
                        return treeNode.chk != 1;
                    },
                    conditionResource: function (treeId, treeNode) {
                        return treeNode.chk != 0;
                    },
                    beforeDrag: function (treeId, treeNode) {
                        return true;
                    },
                    beforeDrop: function (treeId, treeNode) {
                        return true;
                    },
                    drop: function (event, treeId, treeNodes, targetNode, moveType, isCopy) {
                        console.log(targetNode);
                    }
                },
                ztreeData: {
                    motheds: {
                        autoOpenName: ["微写作", "555"],
                        autoOpenCode: [],
                    },
                    idKey: "ctbCode",
                    pIdKey: "parentCode",
                    name: 'knowledgeName'
                }
            }
        },
        methods: {
            ztreeCallback (name, ctbCode, parentCode, parentName) {
                console.log(name, ctbCode);
                console.log(parentName, parentCode);
            }
        },
        mounted () {

        },
        components: {
            ztree
        }
    }
</script>