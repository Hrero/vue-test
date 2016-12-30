<template>
    <div id="main" class="positionCenter">
        <h2>易教空间资源库系统录入平台</h2>
        <div class="ui ordered steps">
            <div class="step navList" v-for="(val,key,index) in sideBarData" :data-name="key"
                 @click="showSideBar($event)">
                <router-link :to="val[0].href">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="val[0].icon"></use>
                    </svg>
                    {{val[0].name}}
                </router-link>
            </div>
        </div>
        <ul class="nav nav-pills navListBox nav-stacked" role="tablist">
            <li role="presentation" class="navList" v-for="(val,key,index) in sideBar[0].children">
                <p>{{val.sideBarH}}</p>
                <div class="sideBarList" v-for="item in val.list" @click="sideBarList($event)">
                    <router-link :to="item.href">
                        {{item.sideBarName}}
                    </router-link>
                </div>
            </li>
        </ul>
        <div class="contentBox">
            <div id="content">
                <router-view></router-view>
            </div>
        </div>
        <p>\(\frac{2}{3}\)</p>
    </div>
</template>

<script>
    import "../css/main.scss";
    import "../public/common/iconfont/iconfont"
    import sideBar from "../routes/sideBar"
    // 公共js模块
    import $ from "jquery"
    import baseData from "../baseData"
    export default {
        data () {
            return {
                sideBar: [],
                sideBarData: sideBar
            }
        },
        methods: {
            showSideBar (event, checked) {
                var target = event.path;
                for (let item of target) {
                    if (item.localName == "div") {
                        target = $(item);
                        break;
                    }
                }
                //target.addClass("active").siblings("li").removeClass("active");
                var sideBar = target.attr("data-name");
                this.sideBar = this.sideBarData[sideBar];
            },
            sideBarList (event) {
                var target = $(event.target);
                target.addClass("active").siblings().removeClass("active").parent().children("a").removeClass("active");
            }
        },
        created () {
            this.sideBar = this.sideBarData.product;
        },
        mounted () {

        }
    }
</script>