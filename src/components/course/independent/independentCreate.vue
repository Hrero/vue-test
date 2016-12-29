<template>
    <div id="independentCreate" @click="hideBox()">
        {{formStacked}}
        <form action="">
            <div class="row">
                <h3 style="text-align: center">创建独立课程</h3>
                <div class="form-group col-md-12">
                    <label>课程名称</label>
                    <input type="text" v-model="formStacked.name" class="form-control" placeholder="课程名称">
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-4">
                    <label>业务编号</label>
                    <input type="text" v-model="formStacked.idNumber" class="form-control" placeholder="业务编号">
                </div>
                <div class="form-group col-md-4">
                    <categories data-id="categoriesCodeZtree" v-on:increment="incrementTotal"></categories>
                </div>
                <div class="form-group col-md-4">
                    <label>课程类型</label>
                    <select class="form-control" v-model="formStacked.rtCategoryCode">
                        <option v-for="item in ajax.retrivalData" :value="item.categoryCode">{{item.categoryName}}
                        </option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div id="CourseGrade" class="form-group col-md-3">
                    <label>学年</label>
                    <select class="form-control slt_line" v-model="formStacked.gradeCode">
                        <option v-for="item in ajax.gradeData" :value="item.gradeCode">{{item.gradeName}}</option>
                    </select>
                </div>
                <div id="CourseSubject" class="form-group col-md-3">
                    <label>学科</label>
                    <select class="form-control slt_line" v-model="formStacked.subjectCode">
                        <option v-for="item in ajax.subjectData" :value="item.code">{{item.name}}</option>
                    </select>
                </div>
                <div id="CourseBookType" class="form-group col-md-6">
                    <label>教材版本</label>
                    <select class="form-control select_bt" v-model="formContent.bookType"
                            @change="bookTypeSelectChange(formContent.bookType)">
                        <option v-for="item in ajax.bookTypeData" :value="item.code">{{item.name}}</option>
                    </select>
                    <input type="radio" name="bookType" value="xgr" @click="bookTypeChange('xgr')">易教版
                    <input type="radio" name="bookType" value="no" @click="bookTypeChange('no')">无教材
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-4">
                    <label>建议开课时间</label>
                    <div class="input-append date" id="datetimepicker" data-date="12-02-2012"
                         data-date-format="dd-mm-yyyy">
                        <input class="span2" size="16" type="text" value="12-02-2012">
                        <span class="add-on"><i class="icon-th"></i></span>
                    </div>
                    <!--<input type="text" name="courseTime" class="Wdate">-->
                </div>

                <div class="form-group col-md-4">
                    <label>建议课程价格</label>
                    <input type="text" name="suggestPrice" class="form-control" value="0">
                </div>
                <div class="form-group col-md-4">
                    <label>课时总数</label>
                    <input type="number" name="hourCount" class="form-control" value="0" maxlength="2">
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-4" style="margin-right: 10px">
                    <label>上课频率/次</label><br>
                    <input type="text" id="txt_frequency" value="0" style="width:120px">
                    <select id="slt_yzr" class="plSel">
                        <option value="/月">月</option>
                        <option value="/周">周</option>
                        <option value="/日">日</option>
                    </select>
                </div>
                <div class="form-group col-md-4" >
                    <label>课程难易度</label>
                    <div class="nydLab">
                        <label><input type="radio" value="3" name="difficultStar">难</label>
                        <label><input type="radio" value="2" name="difficultStar">中</label>
                        <label><input type="radio" value="1" name="difficultStar">易</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6" style="margin-right: 10px">
                    <label>目标分数</label>
                    <input type="text" name="goalScore" class="form-control" placeholder="目标分数">
                </div>
                <div class="form-group col-md-6">
                    <label>课程时长</label>
                    <div class="input-group">
                        <input type="text" name="duration" class="form-control" placeholder="课程时长">
                        <div class="input-group-addon">分钟</div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6 sceneD">
                    <label >课程场景</label>

                  <!--  <div class="sceneDiv" style="word-break:break-all;" v-if="ajax.sceneData.length>0" >
                        <a v-for="item in ajax.sceneData" class="ui gray label " style="margin-bottom:.3em"  v-on:click = 'isActive($event)'>{{item.scene_name}}<input type="hidden" name="id" :value=" item.id"></a>
                    </div>
                    <div class="sceneDiv" style="word-break:break-all;" v-else>
                        <p style="color: red;text-align: left">没有获取到场景数据..</p>
                    </div>-->
                    <div class="sceneDiv" style="word-break:break-all;">
                        <a v-for="(item, index) in ajax.sceneData" :class="[indexVal.sceneData == index ? 'red' : 'gray', 'ui label']" style="margin-bottom:.3em"  @click = 'isActive(item.id, "sceneData", index)'>
                            {{item.scene_name}}
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-12">
                    <label>课程来源</label>

                  <!--  <div class="originDiv" style="word-break:break-all;">
                        <a v-for="item in ajax.resouseOrigin" class="ui gray label " style="margin-bottom:.3em"  v-on:click = 'isActive($event)'>{{item.origin_desc}}<input type="hidden" name="id" :value=" item.id"></a>
                    </div>-->
                    <div class="originDiv" style="word-break:break-all;">
                        <a v-for="(item, index) in ajax.resouseOrigin" :class="['ui label', indexVal.resouseOrigin == index ? 'red': 'gray']" style="margin-bottom:.3em"  @click = 'isActive(item.id, "resouseOrigin", index)'>
                            {{item.origin_desc}}
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-12">
                    <label>教学目标</label>
                    <div id="div1" style="height:200px;">
                        <p>请输入内容...</p>
                    </div>
                </div>
            </div>
            <div class="row" style="text-align: center">
                <span class="btn btn-primary" id="submit_idd">提交</span>
            </div>
        </form>
    </div>
</template>

<script>
    import "../../../css/independent/independentCreate.scss"
    import categories from "../../../public/ztree/categories.vue"
    import base from "../../../utils/base"

    export default {
        data () {
            return{
                //需要提交的数据
                formStacked: {
                    "name":"",
                    "idNumber": "",
                    "categoriesCode": "",
                    "rtCategoryCode": "is_001",
                    "gradeCode": "11",
                    "subjectCode": "",
                    "bookType": "",
                    "sceneData": "",
                    "resouseOrigin": ""
                },
                //显示的数据
                formContent: {
                    "categoriesName": "",
                    "bookType": ""
                },
                //开关量
                flag: {
                    "categories": false
                },
                //获取的数据
                ajax: {
                    "retrivalData": [],
                    "gradeData": [],
                    "sceneData" : [],
                    "resouseOrigin" : [],
                    "subjectData": [{"code": "", "name": "请选择学年"}],
                    "bookTypeData": [{"code": "", "name": "请选择学年、学科"}]
                },
                radio: "",
                value2: "",
                masger: "组件independentCreate",
                state3: "",
                dataType: [{"name": "月", "value": "月"}, {"name": "周", "value": "周"}, {"name": "日", "value": "日"}],
                pickerOptions1: {},
                formInline: "",
                categoriesName: "",
                isShow: true,
                //active : true,
                indexVal: {
                    "sceneData": 0,
                    "resouseOrigin": 0
                }
            }
        },
        methods: {
            //接收上课形式模块传回来的name、code

            incrementTotal (name, code) {
                this.formContent.categoriesName = name;
                this.formStacked.categoriesCode = code;
            },
            //隐藏“上课形式”模块
            hideBox () {
                this.isShow = false;
            },
            //点击“易教版”和“无教材”时，清空“教材”内容
            bookTypeChange (val) {
                this.formStacked.bookType = val;
                this.formContent.bookType = "";
            },
            bookTypeSelectChange (val) {
                this.formStacked.bookType = val;
            },
            isActive(id, dom, index){
                this.formStacked[dom] = id;
                this.indexVal[dom] = index;
            }
        },

        created () {
            //获取“课程类型”数据
           /* $.post("/course/independent/retrival", function (data) {
                this.ajax.retrivalData = JSON.parse(data).msgObject;
            });*/
            //获取“学年”数据
            //console.log(baseData,"created");
            $.get("/course/independent/getAllGrade").then((data) => {
                this.ajax.gradeData = JSON.parse(data);

            });
        },
        beforeMount(){

        },
        mounted () {
            var editor = new wangEditor('div1');
            editor.create();
            /*console.log(baseData,"mounted");
            console.log(baseData.scene);
            this.ajax.sceneData = baseData.scene;
            this.ajax.resouseOrigin = baseData.resouseOrigin;*/
        },
        watch: {
            //根据“学年”获取“学科”
            "formStacked.gradeCode" (val, oldVal) {
                $.get("/course/independent/getSubjectByGradeCode?subjectCode=" + val).then((data) => {
                    data = JSON.parse(data);
                    data.unshift({"code": "", "name": "请选择学科"});
                    this.ajax.subjectData = data;
                });
            },
            //根据“学年”、“学科”获取“教材”
            "formStacked.subjectCode" (val, oldVal) {
                $.get("/course/independent/getBookType?subjectCode=" + val + "&gradeCode=" + this.formStacked.gradeCode).then((data) => {
                    data = JSON.parse(data);
                    data.unshift({"code": "", "name": "请选择教材"});
                    this.ajax.bookTypeData = data;
                });
            }
        },
        components: {
            categories
        }
    }

</script>
