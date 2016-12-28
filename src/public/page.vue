<template lang="html">
    <div class="pageComponent" v-show="show">
        <div class="ui borderless pagination menu">
            <a class="item" @click="first" :style="firstStyle">
                首页
            </a>
            <a class="item" @click="prev" :style="prevStyle">
                上一页
            </a>
            <a v-for="(item, index) in list" :class="[activeIndex == index ? 'active' : '', 'item']" @click="clickPaper(item, index)">
                {{item}}
            </a>
            <a class="item" @click="next" :style="nextStyle">
                下一页
            </a>
            <a class="item" @click="last" :style="lastStyle">
                尾页
            </a>
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            dataPage: {
                type: Object,
                twoWay: true
            }
        },
        data () {
            return {
                list: [],
                activeIndex: 0,
                cp: 1,
                show: false,
                showValue: null,
                firstStyle: {cursor: "not-allowed"},
                prevStyle: {cursor: "not-allowed"},
                nextStyle: {cursor: "default"},
                lastStyle: {cursor: "default"}
            }
        },
        methods: {
            updatePage () {
                let page = this.dataPage,
                    list = [];
                // 1页时
                if(page.countPage == 1){
                    return ;
                }
                for (let i = 1; i <= this.showPage, i <= page.countPage; i++) {
                    list.push(i);
                }
                // 低于7页时
                if(this.showValue > page.countPage){
                    this.showValue = page.countPage;
                    this.nextStyle = {cursor: "not-allowed"};
                    this.lastStyle = {cursor: "not-allowed"};
                }
                this.list = list;
                this.show = true;
            },
            //HTTP请求
            ajax (cp) {
                let page = this.dataPage;
                page.params.cp = cp;
                $[page.type](page.url, page.params, (data) => {
                    //发送数据
                    this.$emit("page", JSON.parse(data));
                });
            },
            // 点击列表
            clickPaper (cp, index) {
                let page = this.dataPage,
                    showPaper = this.showValue,
                    difference = index - showPaper / 2,
                    arr = this.list;
                //点击事件
                if(difference > 0){
                    difference = Math.ceil(difference);
                    for(let i = 1; i <= difference; i++){
                        if(arr[arr.length - 1] == page.countPage){
                            break;
                        }
                        arr.shift();
                        arr.push(arr[arr.length - 1] + 1);
                    }
                } else if(difference < 0){
                    difference = Math.floor(Math.abs(difference));
                    for(let i = 1; i <= difference; i++){
                        if(arr[0] == 1){
                            break;
                        }
                        arr.pop();
                        arr.unshift(arr[0] - 1);
                    }
                }
                // active下标
                for(let i = 0; i < arr.length; i++){
                    if(arr[i] == cp){
                        this.activeIndex = i;
                        break ;
                    }
                }
                this.list = arr;
                this.cp = cp;
                this.ajax(cp);
                this.disable();
            },
            // 上一页
            prev () {
                let cp = "";
                if(this.list[0] != 1){
                    if(this.cp <= Math.floor(this.list.length / 2)){
                        this.activeIndex--;
                    } else {
                        this.list.pop();
                        this.list.unshift(this.list[0] - 1);
                    }
                } else {
                    if(this.activeIndex != 0){
                        this.activeIndex--;
                    }
                }
                cp = this.list[this.activeIndex];
                this.ajax(cp);
                this.cp = cp;
                this.disable();
            },
            // 下一页
            next () {
                let cp = "",
                    length = this.list.length - 1;
                if(this.list[length] != this.dataPage.countPage){
                    if(this.cp <= Math.floor(length + 1)/2){
                        this.activeIndex++;
                    } else {
                        this.list.shift();
                        this.list.push(this.list[length - 1] + 1);
                    }
                } else {
                    if(this.activeIndex != length){
                        this.activeIndex++;
                    }
                }
                cp = this.list[this.activeIndex];
                this.ajax(cp);
                this.cp = cp;
                this.disable();
            },
            // 首页
            first () {
                let arr = [],
                    page =  this.showValue;
                for (let i = 1; i <= page; i++) {
                    arr.push(i);
                }
                this.list = arr;
                this.activeIndex = 0;
                this.ajax(1);
                this.cp = 1;
                this.disable();
            },
            // 尾页
            last () {
                let arr = [],
                    connt = this.dataPage.countPage,
                    page = this.showValue;
                for (let i = connt - page + 1; i <= connt; i++) {
                    arr.push(i);
                }
                this.list = arr;
                this.activeIndex = page - 1;
                this.ajax(connt);
                this.cp = connt;
                this.disable();
            },
            //禁用
            disable () {
                // 123页时
                if(this.list[0] == 1){
                    this.firstStyle = {cursor: "not-allowed"};
                    this.lastStyle = {cursor: "default"};
                    this.nextStyle = {cursor: "default"};
                    if(this.cp == 1){
                        this.prevStyle = {cursor: "not-allowed"};
                    } else {
                        this.prevStyle = {cursor: "default"};
                    }
                    //不够7页时
                    if(this.list[this.list.length - 1] == this.dataPage.countPage){
                        this.lastStyle = {cursor: "not-allowed"};
                        if(this.cp == this.dataPage.countPage){
                            this.nextStyle = {cursor: "not-allowed"};
                        }
                    }
                // 9876时
                } else if(this.list[this.list.length - 1] == this.dataPage.countPage){
                    this.lastStyle = {cursor: "not-allowed"};
                    this.firstStyle = {cursor: "default"};
                    this.prevStyle = {cursor: "default"};
                    if(this.cp == this.dataPage.countPage){
                        this.nextStyle = {cursor: "not-allowed"};
                    } else {
                        this.nextStyle = {cursor: "default"};
                    }
                } else {
                    this.firstStyle = {cursor: "default"};
                    this.prevStyle = {cursor: "default"};
                    this.nextStyle = {cursor: "default"};
                    this.lastStyle = {cursor: "default"};
                }
            }
        },
        watch: {
            dataPage (){
                this.cp = 1;
                this.list = [];
                this.activeIndex = 0;
                this.show = false;
                this.showValue = this.dataPage.showPage || 7;
                this.updatePage();
            }
        }
    }
</script>

<style>
    .pageComponent {
        text-align: center;
    }
</style>