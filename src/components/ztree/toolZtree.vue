<template>
    <div :id="id" class="ztree"></div>
</template>

<script>
    export default{
        props: {
            ztreeAjax: {
                type: Object,
                twoWay: false
            },
            id: {
                type: String,
                twoWay: false
            },
            methods: {
                type: Object,
                twoWay: false
            },
            ztreeData: {
                type: Object,
                twoWay: false
            }
        },
        data () {
            return {
                ctbCode: [],
                name: [],
                parentCtbCode: [],
                parentName: []
            }
        },
        mounted () {
            let ztreeAjax = this.ztreeAjax;
            $[ztreeAjax.type](ztreeAjax.url, ztreeAjax.params || null, (data) => {
                data = JSON.parse(data);
                let setting = {
                    data: {
                        simpleData: {
                            enable: true,
                            idKey: this.ztreeData.idKey,
                            pIdKey:  this.ztreeData.pIdKey
                        },
                        key: {
                            name:  this.ztreeData.name
                        }
                    },
                    view: {
                        fontCss: this.fontCss,
                        addHoverDom: this.addHoverDom,
                        removeHoverDom: this.removeHoverDom,
                    },
                    edit: {
                        enable: true,
                        showRemoveBtn: this.showRemoveBtn,
                        showRenameBtn: this.showRenameBtn,
                        drag: {
                            autoExpandTrigger: false,
                            isCopy: true,
                            isMove: false,
                            prev: true,
                            next: true,
                            inner: true,
                            minMoveSize: 5,
                            borderMax: 10,
                            borderMin: -5,
                            maxShowNodeNum: 5,
                            autoOpenTime: 500
                        }
                    },
                    callback: {
                        onClick: this.click,
                        onRemove: this.remove,
                        onRename: this.update,
                        beforeDrag: this.beforeDrag,
                        onDrag: this.drag,
                        beforeDrop: this.beforeDrop,
                        onDrop:  this.methods.drop
                    }
                };
                $.fn.zTree.init($("#" + this.id), setting, data);
                let methods = this.ztreeData.methods,
                    self = this;
                $.each(methods, function(key, item){
                    self[key](item);
                });
            });
        },
        methods: {
            // 是否显示删除按钮
            showRemoveBtn () {
                return !!(this.methods.remove);
            },
            // 是否显示修改按钮
            showRenameBtn () {
                return !!(this.methods.update);
            },
            // 点击事件
            click (event, treeId, treeNode) {
                if(this.methods.click){
                    this.methods.click(event, treeId, treeNode);
                }
            },
            // 删除节点
            remove (event, treeId, treeNode) {
                if(this.methods.remove){
                    this.methods.remove(event, treeId, treeNode);
                }
            },
            // 末级知识点颜色为红色
            fontCss (treeId, treeNode) {
                if(treeNode.chk == 1){
                    return {
                        color: "red"
                    }
                }
            },
            // hover事件
            addHoverDom (treeId, treeNode) {
                let self = this,
                    sObj = $("#" + treeNode.tId + "_span"),
                    add = sObj.siblings(".add"),
                    update = sObj.siblings(".edit"),
                    resource = sObj.siblings(".resource");
                // 添加节点
                if(add.length > 0){
                    add.show();
                    // 是否显示添加节点
                } else if(self.methods.add && self.methods.conditionAdd(treeId, treeNode)){
                    let addStr = "<span class='button add' id='addBtn_" + treeNode.tId + "' title='add node' onfocus='this.blur();'></span>";
                    sObj.after(addStr);
                    add = sObj.siblings(".add");
                }
                if (add) {
                    add.off("click").on("click", function (event) {
                        event.stopPropagation();
                        self.methods.add(event, treeId, treeNode);
                    });
                }
                // E 节点
                if(resource.length > 0){
                    resource.show();
                    // 是否显示添加节点
                } else if(self.methods.resource && self.methods.conditionResource(treeId, treeNode)){
                    let addStr = "<span class='button resource' id='resourceBtn_" + treeNode.tId + "' title='自定义' onfocus='this.blur();'></span>";
                    sObj.after(addStr);
                    resource = sObj.siblings(".resource");
                }
                if (resource) {
                    resource.off("click").on("click", function (event) {
                        event.stopPropagation();
                        self.methods.resource(event, treeId, treeNode);
                    });
                }
                // 修改节点
                if(update){
                    update.off("click").on("click", function(event){
                        event.stopPropagation();
                        self.methods.update(event, treeId, treeNode);
                    })
                }
            },
            // 鼠标离开
            removeHoverDom (treeId, treeNode) {
                // +
                if(this.methods.add){
                    $("#addBtn_"+treeNode.tId).hide();
                }
                // E
                if(this.methods.resource){
                    $("#resourceBtn_"+treeNode.tId).hide();
                }
            },
            // 拖拽前执行
            beforeDrag (treeId, treeNode) {
                if(this.methods.beforeDrag){
                    return this.methods.beforeDrag(treeId, treeNode);
                } else {
                    return false;
                }
            },
            // 拖拽结束之前执行
            beforeDrop (treeId, treeNode) {
                if(this.methods.beforeDrop){
                    return this.methods.beforeDrop(treeId, treeNode);
                } else {
                    return false;
                }
            },
            // 根据name打开数
            autoOpenName (params) {
                let treeObj = $.fn.zTree.getZTreeObj(this.id);
                $.each(params, function(index, value){
                    let node = treeObj.getNodeByParam("knowledgeName", value).getParentNode();
                    treeObj.expandNode(node, true, false, false);
                });
            },
            // 根据ctbCode打开数
            autoOpenCode (params) {
                let treeObj = $.fn.zTree.getZTreeObj(this.id);
                $.each(params, function(index, value){
                    let node = treeObj.getNodeByParam("ctbCode", value).getParentNode();
                    treeObj.expandNode(node, true, false, false);
                });
            },
            // 打开全部数
            autoOpenAll (type) {
                let treeObj = $.fn.zTree.getZTreeObj(this.id);
                treeObj.expandAll(type);
            }
        }
    }
</script>

<style>
    .ztree li span.button.add {margin-right:2px; background-position:-145px 0; vertical-align:top; *vertical-align:middle}
    .ztree li span.button.resource {margin-right:2px; background-position:-127px -32px; vertical-align:top; *vertical-align:middle}
</style>