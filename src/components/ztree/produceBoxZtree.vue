<template>
    <div>
        <h1>多选数</h1>
        <div :id="id" class="ztree"></div>
    </div>
</template>

<script>
    import independent from "../../utils/course/independent"
    export default{
        props: {
            params: {
                type: Object,
                twoWay: false
            },
            id: {
                type: String,
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
            $.post("/course/independent/getAllKnowlege", this.params, (data) => {
                data = JSON.parse(data);
                let setting = {
                    data: {
                        simpleData: {
                            enable: true,
                            idKey: "ctbCode",
                            pIdKey: "parentCode"
                        },
                        key: {
                            name: 'knowledgeName'
                        }
                    },
                    check: {
                        autoCheckTrigger: true,
                        chkboxType: {"Y": "p", "N": "s"},
                        chkStyle: "checkbox",
                        enable: true
                    },
                    view: {
                        fontCss: this.fontCss
                    },
                    callback: {
                        onClick: this.click,
                        beforeCheck: this.beforeCheck,
                        onCheck: this.onCheck
                    }
                };
                $.fn.zTree.init($("#" + this.id), setting, data);
            })
        },
        methods: {
            click (event, treeId, treeNode) {
                console.log(treeNode);
            },
            fontCss (treeId, treeNode) {
                if(treeNode.chk == 1){
                    return {
                        color: "red"
                    }
                }
            },
            notRepetition (arr) {
                for(let i = 0; i < arr.length; i++){
                    for(let j = 0; j < arr.length; j++){
                        if(arr[j].indexOf(arr[i]) != -1 && i != j){
                            arr[i] = "CF";
                            break ;
                        }
                    }
                }
                let str = arr.join(",").replace(/(CF,)|(CF)/g, "");
                return str.split(",");
            },
            beforeCheck (treeId, treeNode) {
                if(treeNode.chk == 0 && treeNode.isParent == false){
                    return true;
                }
                return false;
            },
            onCheck () {
                let zTree = $.fn.zTree.getZTreeObj(this.id),
                    nodes = zTree.getChangeCheckedNodes(),
                    path = [],
                    ctbCode = [],
                    name = [],
                    parentCtbCode = [],
                    parentName = [];
                for(let i = 0; i <  nodes.length; i++){
                    path.push(nodes[i].path);
                }
                path = this.notRepetition(path);
                if(path[0] != ""){
                    for(let i=0; i<path.length; i++){
                        let index = path[i].lastIndexOf("|")+1;
                        ctbCode.push(path[i].substr(index));
                        let treeNode = zTree.getNodeByParam("ctbCode", ctbCode[i]);
                        name.push(treeNode.knowledgeName);
                        let parent = treeNode.parentCode;
                        parentCtbCode.push(parent.ctbCode);
                        parentName.push(parent.knowledgeName);
                    }
                }
                this.ctbCode = ctbCode;
                this.name = name;
                this.$emit("checkedBox", this.ctbCode, this.name, this.parentCtbCode, this.parentName);
            }
        }
    }
</script>