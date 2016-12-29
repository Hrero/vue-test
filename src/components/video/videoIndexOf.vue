<template lang="html">
    <div class="">
        <uploadFile></uploadFile>
        <p @click="deleteFile">点击删除文件</p>
        <ueditor dataId="div1" :dataStyle="style" v-on:increment="incrementTotal" :dataBothway="bothway"></ueditor>
        <button type="button" class="btn btn-default" @click="preview()">预览</button>
        <div id="ccc" v-ueditor="ueditor"></div>
    </div>
</template>

<script>
    import uploadFile from "../../public/upload/file/uploadFile.vue"
    import ueditor from "../../public/wangEditor.vue"


    export default {
        data () {
            return {
                ueditor: "",
                style: {
                    height: "300px"
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
            },
            deleteFile () {
                $.get("/qiniu/deleteFileId?file=shell.docx").then((data) => {
                    console.log(data);
                })
            }
        },
        components: {
            ueditor,
            uploadFile
        }
    }
</script>
<style lang="sass">
</style>
