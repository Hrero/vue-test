<template>
    <div id="questionsCreate">
        <h3>创建试题</h3>
        <div class="list">
            <h4>试题基本信息</h4>
            <div class="option">
                <div class="left">
                    <i>*</i>学年
                </div>
                <div class="right grade">
                    <div @click="showBox()">
                        <span>{{params.gradeName || showData.gradeName}}</span>
                        <input type="hidden" v-model="params.gradeCode" />
                    </div>
                    <input type="hidden" />
                    <div class="gradeOptions" v-if="isShowHide.gradeOptions">
                        <div class="block">
                            <div>小学</div>
                            <p v-for="item in ajax.grade1">
                                <input :id="'gradeCode'+item.gradeCode" type="checkbox" :value="item.gradeCode" v-model="showData.gradeArr" /><label :for="'gradeCode'+item.gradeCode">{{item.gradeName}}</label>
                            </p>
                        </div>
                        <div class="block">
                            <div>初中</div>
                            <p v-for="item in ajax.grade2">
                                <input :id="'gradeCode'+item.gradeCode" type="checkbox" :value="item.gradeCode" v-model="showData.gradeArr" /><label :for="'gradeCode'+item.gradeCode">{{item.gradeName}}</label>
                            </p>
                        </div>
                        <div class="block">
                            <div>高中</div>
                            <p v-for="item in ajax.grade3">
                                <input :id="'gradeCode'+item.gradeCode" type="checkbox" :value="item.gradeCode" v-model="showData.gradeArr" /><label :for="'gradeCode'+item.gradeCode">{{item.gradeName}}</label>
                            </p>
                        </div>
                        <div class="block">
                            <span @click="hideBox()">确定</span>
                            <span @click="cancel()">取消</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //import axios from "axios"
    import base from "../../utils/base"
    import "../../css/questions/questionsCreate.scss"
    export default {
        data () {
            return {
                params: {
                    gradeCode: "",
                    gradeName: ""
                },
                ajax: {
                    gradeAll: [],
                    grade1: [],
                    grade2: [],
                    grade3: []
                },
                showData: {
                    gradeName: "请选择学年（可多选，不可以跨学年）",
                    gradeArr: []
                },
                isShowHide: {
                    gradeOptions: false
                }
            }
        },
        created () {
            //学年分类
            /*axios.get("/questions/questionsCreate/getAllGrade").then((data) => {
                var gradeAll = data.data;
                for (let item of gradeAll) {
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
                }
            })*/
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
            }
        },
        mounted () {

        },
        watch: {
           "showData.gradeArr" (val, oldVal) {
                let gradeAll = this.ajax.gradeAll,
                    gradeName = [],
                    type = "",
                    typeNew = "";
                for(let i=0; i<val.length; i++){
                    //判断是否跨学段选择
                    if(type){
                        typeNew = val[i].substring(0,1);
                        if(typeNew != type){
                            this.showData.gradeArr = [];

                            alert("请不要跨学段选择");
                            return ;
                        }
                    } else {
                        type = val[i].substring(0,1);
                    }
                    //根据gradeCode获取gradeName;
                    for(let k=0; k<gradeAll.length; k++){
                        if(gradeAll[k].gradeCode == val[i]){
                            gradeName.push(gradeAll[k].gradeName);
                            break;
                        }
                    }
                }
                this.params.gradeName = gradeName.join();
                this.params.gradeCode = val.join();
            }
        }
    }
</script>