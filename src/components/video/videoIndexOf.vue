<template lang="html">
    <div class="">
        <ueditor :dataStyle="style" v-on:increment="incrementTotal" :dataBothway="bothway"></ueditor>
        <button type="button" class="btn btn-default" @click="preview()">预览</button>
        <div id="ccc" v-ueditor="ueditor"></div>
    </div>
</template>

<script>
    //import axios from 'axios';
    import uploadImage from '../../public/upload/img/javascripts/uploadImage';
    import ueditor from "../common/wangEditor.vue"
    import $ from "jquery";


    export default {
        data () {
            return {
                ueditor: "",
                style: {
                    height:"300px"
                },
                bothway: true
            }
        },
        computed: {},
        mounted () {

        },
        beforeCreate () {

        },
        updated () {

        },
        methods: {
            preview () {
               let ueditorHtml = $("#div1").html();
               this.ueditor = ueditorHtml;
            },
            incrementTotal (data) {
                this.ueditor = data;
            }
        },
        components: {
            ueditor
        }
    }
</script>
<style lang="sass">
</style>
