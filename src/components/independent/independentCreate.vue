<template>
    <div id="independentCreate">
        {{formStacked}}
        <h3>创建独立课程</h3>
        <el-form label-position="top" :model="formStacked" class="demo-form-stacked">
            <el-form-item label="课程名称">
                <el-input v-model="formStacked.name" placeholder="课程名称"></el-input>
            </el-form-item>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="业务编号">
                        <el-input v-model="formStacked.idNumber" placeholder="业务编号"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <categories data-id="categoriesCodeZtree" v-on:increment="incrementTotal"></categories>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="课程类型">
                        <el-input v-model="formStacked.rtCategoryCode" placeholder="课程类型"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="学年">
                        <el-input v-model="formStacked.gradeCode"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="学科">
                        <el-input v-model="formStacked.subjectCode"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="教材版本">
                        <el-input v-model="formStacked.bookType"></el-input>
                    </el-form-item>
                    <template>
                        <el-radio class="radio" v-model="formStacked.bookType" label="xgr">易教版</el-radio>
                        <el-radio class="radio" v-model="formStacked.bookType" label="no">无教材</el-radio>
                    </template>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="建议开课时间">
                        <template>
                            <div class="block">
                                <el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1"></el-date-picker>
                            </div>
                        </template>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="建议课程价格">
                        <el-input v-model="formStacked.suggestPrice" value="0"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="课时总数">
                        <el-input v-model="formStacked.hourCount" value="0"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="上课频率/次">
                        <el-form-item>
                            <el-input v-model="formStacked.name" placeholder="上课频率/次" class="frequencyIndex"></el-input>
                            <el-select v-model="formInline.region" value="月" class="frequencyType">
                                <el-option v-for="item in dataType" :label="item.name" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="课程难易度">
                        <template>
                            <el-radio class="radio" v-model="formStacked.difficultStar" label="1">难</el-radio>
                            <el-radio class="radio" v-model="formStacked.difficultStar" label="2">中</el-radio>
                            <el-radio class="radio" v-model="formStacked.difficultStar" label="3">易</el-radio>
                        </template>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="目标分数">
                        <el-input v-model="formStacked.goalScore" placeholder="目标分数"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="课程时长">
                        <el-input v-model="formStacked.duration" placeholder="课程时长"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="课程场景">
                <span class="clickActive lists">超前学习</span><span class="listActive lists">超前学习</span>
            </el-form-item>
            <el-form-item label="课程来源">
                <span class="clickActive lists">超前学习</span><span class="listActive lists">超前学习</span>
            </el-form-item>
            <el-form-item class="btnCenter">
                <el-button type="primary crateClasses">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import "../../css/independent/independentCreate.scss"
    import categories from "../../public/ztree/categories.vue"

    export default {
        data () {
            return {
                formStacked: {
                    "name": "",
                    "idNumber": "",
                    "categoriesCode": "",
                    "rtCategoryCode": ""
                },
                formContent: {
                    "categoriesName": "111"
                },
                flag: {
                    "categories": false
                },
                radio: "",
                value2: "",
                masger: "组件independentCreate",
                state3: "",
                dataType: [{"name":"月","value":"月"},{"name":"周","value":"周"},{"name":"日","value":"日"}],
                pickerOptions1: {},
                formInline: "",
                categoriesName: ""
            }
        },
        methods: {
            incrementTotal (name,code) {
                this.formContent.categoriesName = name;
                this.formStacked.categoriesCode = code;
            }
        },
        created () {
           /* var self = this;
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
                    self.formContent.categoriesName = treeNode.name;
                    self.formStacked.categoriesCode = treeNode.ctbCode;
                    self.flag.categories = false;
                }
                // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
                var zTreeObj = $.fn.zTree.init($("#categoriesCodeZtree"), setting, data);
                //展开节点
                zTreeObj.expandAll(true);
                console.log(zTreeObj)
            });*/
        },
        components: {
            categories
        }
    }
</script>