<template>
    <div id="questionsCreate" @click="hideBox()">
        <h3>创建试题</h3>
        <div class="list">
            <h4>试题基本信息</h4>
            <div class="option">
                <div class="left">
                    <i>*</i>学年
                </div>
                {{isShowHide.gradeOptions}}
                <div class="right grade">
                    <span @click.stop="showBox()">{{showData.gradeCode}}</span>
                    <input type="hidden" v-model="params.gradeCode"/>
                    <div class="gradeOptions" v-if="isShowHide.gradeOptions" @click.stop="">
                        <div class="block">
                            <label><input type="checkbox" v-model="checkBoxAll1"/>小学</label>
                            <p v-for="item in ajax.grade1"><label><input type="checkbox" :value="item.gradeCode"/>{{item.gradeName}}</label></p>
                        </div>
                        <div class="block">
                            <label><input type="checkbox" />初中</label>
                            <p v-for="item in ajax.grade2"><label><input type="checkbox" :value="item.gradeCode"/>{{item.gradeName}}</label></p>
                        </div>
                        <div class="block">
                            <label><input type="checkbox" />高中</label>
                            <p v-for="item in ajax.grade3"><label><input type="checkbox" :value="item.gradeCode"/>{{item.gradeName}}</label></p>
                        </div>
                        <div class="block">
                            <span>确定</span>
                            <span>取消</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import base from "../../utils/base"
    import "../../css/questions/questionsCreate.scss"
    export default {
        data () {
            return {
                params: {
                    gradeCode: ""
                },
                ajax: {
                    grade1: [],
                    grade2: [],
                    grade3: []
                },
                showData: {
                    gradeCode: "请选择学年（可多选，不可以跨学年）"
                },
                isShowHide: {
                    gradeOptions: false
                }
            }
        },
        created () {
            //学年分类
            this.$http.get(base.getAllGrade).then((data) => {
                var gradeAll = data.data;
                for(let item of gradeAll){
                    switch (item.stageCode) {
                        case "1" : this.ajax.grade1.push(item);
                            break;
                        case "2" : this.ajax.grade2.push(item);
                            break;
                        case "3" : this.ajax.grade3.push(item);
                            break;
                    }
                }
            })
        },
        methods: {
            showBox () {
                this.isShowHide.gradeOptions = true;
                console.log(this.isShowHide.gradeOptions)
            },
            hideBox () {
                this.isShowHide.gradeOptions = false;
            }
        },
        mounted () {

        }
    }
</script>