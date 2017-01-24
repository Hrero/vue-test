<template>
    <div id="questionsCreate">
        <h3>创建试题</h3>
        <div class="list">
            <h4>试题基本信息</h4>
            {{params}}
            <div class="option">
                <div class="left">
                    <i>*</i>学年:
                </div>
                <div class="right grade">
                    <div @click="showBox()">
                        <span>{{params.gradeName || showData.gradeName}}</span>
                    </div>
                    <div class="gradeOptions" v-show="isShowHide.gradeOptions">
                        <div class="block">
                            <div>小学</div>
                            <p v-for="item in ajax.grade1">
                                <input :id="'gradeCode'+item.gradeCode" type="checkbox" :value="item.gradeCode"
                                       v-model="showData.gradeArr"/><label :for="'gradeCode'+item.gradeCode">{{item.gradeName}}</label>
                            </p>
                        </div>
                        <div class="block">
                            <div>初中</div>
                            <p v-for="item in ajax.grade2">
                                <input :id="'gradeCode'+item.gradeCode" type="checkbox" :value="item.gradeCode"
                                       v-model="showData.gradeArr"/><label :for="'gradeCode'+item.gradeCode">{{item.gradeName}}</label>
                            </p>
                        </div>
                        <div class="block">
                            <div>高中</div>
                            <p v-for="item in ajax.grade3">
                                <input :id="'gradeCode'+item.gradeCode" type="checkbox" :value="item.gradeCode"
                                       v-model="showData.gradeArr"/><label :for="'gradeCode'+item.gradeCode">{{item.gradeName}}</label>
                            </p>
                        </div>
                        <div class="block">
                            <span @click="hideBox()">确定</span>
                            <span @click="cancel()">取消</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="option">
                <div class="left">
                    <i>*</i>学科/题型:
                </div>
                <div class="right">
                    <select class="ui dropdown" v-model="params.subjectCode">
                        <option v-for="item in ajax.subjectAll" :value="item.subjectCode">{{item.subjectName}}</option>
                    </select>
                    <select class="ui dropdown" v-model="params.qusetionZZ">
                        <option v-for="item in ajax.qusetionZZ" :value="item">{{item}}</option>
                    </select>
                    <select class="ui dropdown" v-model="params.qusetionType">
                        <option v-for="item in ajax.qusetionAll" :value="item.id">{{item.enlargeType}}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="list">
            <h4>试题详情</h4>
            <div class="option">
                <div class="left">
                    <i>*</i>分值：
                </div>
                <div class="right">
                    <input v-model="params.part" type="text" style="width: 100px;"/>
                    <i>*</i>难度：
                    <div class="ui massive star rating" :data-rating="params.grade" data-max-rating="5"
                         @click="grade"></div>
                </div>
            </div>
            <div class="option">
                <div class="left">
                    <i>*</i>题干：
                </div>
                <div class="right">
                    <ueditor dataId="div1" :dataBothway="true" v-on:increment="incrementAdd" :dataStyle="style"
                             dataAdd="添加填空" dataDelete="删除填空" :AddMethods="'_____'+index[index.length - 1]+'_____'"
                             :DeleteMethods="'_____'+deleteIndex+'_____'" v-on:Data="addValue"></ueditor>
                </div>
            </div>
            <div class="option">
                <div class="left">
                    <i>*</i>选项：{{showData.option}}
                </div>
                <div class="right">
                    <button class="ui button" v-for="item in showData.option" @click="btnToggle($event, 'option')">
                        {{item.number}}
                    </button>
                    <ueditor dataId="div2" :dataBothway="true" v-on:increment="incrementOption"
                             :dataStyle="style"></ueditor>
                </div>
            </div>
            <div class="option">
                <div class="left">
                    <i>*</i>解析：{{showData.analysis}}
                </div>
                <div class="right">
                    <button class="ui button" v-for="item in showData.analysis" @click="btnToggle($event, 'analysis')">
                        {{item.number}}
                    </button>
                    <ueditor dataId="div3" :dataBothway="true" v-on:increment="incrementAnalysis"
                             :dataStyle="style"></ueditor>
                </div>
            </div>
            <span @click="pageClick">开始</span>
            <ul>
                <li v-for="item in ajax.video.beanData">{{item.name}}</li>
            </ul>
            <page :data-page="page1" v-on:page="pageCallback"></page>
        </div>
    </div>
</template>

<script>
    import "../../css/questions/questionsCreate.scss"
    import ueditor from "../../components/wangEditor.vue"
    import page from "../../components/page.vue"
    export default {
        data () {
            return {
                params: {
                    gradeCode: "",
                    gradeName: "",
                    subjectCode: "1",
                    qusetionType: "",
                    qusetionZZ: "主观题",
                    part: "",
                    grade: "1",
                    title: ""
                },
                ajax: {
                    gradeAll: [],
                    grade1: [],
                    grade2: [],
                    grade3: [],
                    subjectAll: [],
                    qusetionZZ: ["主观题", "客观题", "复合题"],
                    qusetionAll: [],
                    video: []
                },
                showData: {
                    gradeName: "请选择学年（可多选，不可以跨学年）",
                    gradeArr: [],
                    option: [],
                    analysis: []
                },
                isShowHide: {
                    gradeOptions: false
                },
                style: {
                    "min-height": "200px",
                    "width": "100%"
                },
                index: [1],
                deleteIndex: "2",
                optionIndex: 0,
                analysisIndex: 0,
                page1: {}
            }
        },
        created () {
            /*console.log(baseData.subjectCode);*/
        },
        methods: {
            showBox () {
                this.isShowHide.gradeOptions = true;
            },
            hideBox () {
                this.isShowHide.gradeOptions = false;
            },
            cancel () {
                this.params.gradeName = "";
                this.showData.gradeArr = [];
                this.params.gradeCode = "";
                this.isShowHide.gradeOptions = false;
            },
            grade () {
                let self = this;
                setTimeout(function () {
                    self.params.grade = $('.ui.rating').rating("get rating");
                }, 0);
            },
            addValue (type, value) {
                let div1 = $("#div1");
                //添加内容
                if (type == "add") {
                    let lastValue = this.index[this.index.length - 1];
                    this.index.push(lastValue + 1);
                    div1.children().eq(-1).append(value);
                    this.showData.option.push({
                        number: lastValue,
                        content: "<p><br></p>"
                    });
                    this.showData.analysis.push({
                        number: lastValue,
                        content: "<p><br></p>"
                    });
                } else {
                    //删除内容
                    let html = div1.html(),
                        index = parseInt(value.replace(/_____/g, ""));
                    if (html.indexOf(value) != -1) {
                        this.index.splice(index, 1);
                        for (let i = index; i < this.index.length; i++) {
                            this.index[i]--;
                        }
                    }
                    html = html.replace(value, "");
                    html = html.replace(/_____\d+_____/g, function (i) {
                        let value = parseInt(i.replace(/_____/g, ""));
                        if (index <= value) {
                            return ("_____" + (value - 1) + "_____");
                        } else {
                            return i;
                        }
                    });
                    div1.html(html);
                    //选项、解析删除
                    this.showData.option.splice(index - 1, 1);
                    $("#div2").html("");
                    this.showData.analysis.splice(index - 1, 1);
                    $("#div3").html("");
                    for (let i = index - 1; i < this.showData.option.length; i++) {
                        this.showData.option[i].number--;
                        this.showData.analysis[i].number--;
                    }
                }
            },
            incrementAdd (data) {
                this.params.title = data;
            },
            incrementOption (data) {
                this.showData.option[this.optionIndex].content = data;
            },
            incrementAnalysis (data) {
                this.showData.analysis[this.analysisIndex].content = data;
            },
            btnToggle (e, type) {
                let ele = $(e.target),
                    index = parseInt(ele.html()) - 1;
                ele.addClass('primary').siblings("button").removeClass("primary");
                switch (type) {
                    case "option" :
                        $("#div2").html(this.showData.option[index].content);
                        this.optionIndex = index || 0;
                        this.deleteIndex = ele.html();
                        break;
                    case "analysis" :
                        $("#div3").html(this.showData.analysis[index].content);
                        this.analysisIndex = index || 0;
                        break;
                }
            },
            pageClick (cp) {
                //视频
                let self = this;
                let params = {cp: 1, pageSize: 5};
                $.post("/questions/questionsCreate/getAllSmall", params, (data) => {
                    data = JSON.parse(data);
                    self.ajax.video = data;
                    //分页
                    self.page1 = {
                        //showPage: 7,
                        countPage: 2,
                        url: "/questions/questionsCreate/getAllSmall",
                        type: "post",
                        params: params
                    }
                })
            },
            pageCallback (data) {
                this.ajax.video = data;
            }
        },
        mounted () {
            $('.ui.rating').rating();
            //学年分类
           /* for (let item of baseData.gradeCode) {
                this.ajax.gradeAll.push(item);
                switch (item.stageCode) {
                    case "1" :
                        this.ajax.grade1.push(item);
                        break;
                    case "2" :
                        this.ajax.grade2.push(item);
                        break;
                    case "3" :
                        this.ajax.grade3.push(item);
                        break;
                }
            }*/
            // 学科
           /* this.ajax.subjectAll = baseData.subjectCode;*/
        },
        watch: {
            "showData.gradeArr" (val) {
                let gradeAll = this.ajax.gradeAll,
                    gradeName = [],
                    type = "",
                    typeNew = "";
                for (let i = 0; i < val.length; i++) {
                    //判断是否跨学段选择
                    if (type) {
                        typeNew = val[i].substring(0, 1);
                        if (typeNew != type) {
                            this.showData.gradeArr = [];

                            alert("请不要跨学段选择");
                            return;
                        }
                    } else {
                        type = val[i].substring(0, 1);
                    }
                    //根据gradeCode获取gradeName;
                    for (let k = 0; k < gradeAll.length; k++) {
                        if (gradeAll[k].gradeCode == val[i]) {
                            gradeName.push(gradeAll[k].gradeName);
                            break;
                        }
                    }
                }
                this.params.gradeName = gradeName.join();
                this.params.gradeCode = val.join();
            },
            "params.subjectCode" (val) {
                // 试题类型
                let params = {
                    subjectCode: val
                };
                if(this.params.gradeCode){
                    params.gradeCode = this.params.gradeCode;
                }
                $.post("/questions/questionsCreate/getQuestionId", params).then((data) => {
                    data = JSON.parse(data);
                    this.ajax.qusetionAll = data;
                    console.log(data[0].id);
                    this.params.qusetionType = data[0].id;
                });
            }
        },
        components: {
            ueditor,
            page
        }
    }
</script>

<style>
    .wangEditor-container .wangEditor-txt p {
        line-height: 1 !important;
    }
</style>