<template lang="html">
    <div>
        <div id="div1" :style="dataStyle"></div>
    </div>

</template>

<script>
    import uploadImage from './upload/img/javascripts/uploadImage';
    export default{
        props: {
            dataStyle: {
                type: Object,
                twoWay: true
            },
            dataBothway: {
                type: Boolean,
                twoWay: true
            }
        },
        data () {
            return {}
        },
        mounted () {
            // 创建编辑器
            let self = this;
            let editor = new wangEditor('div1');
            editor.config.customUpload = true;                               // 配置自定义上传
            editor.config.customUploadInit = uploadImage.uploadInit;                      // 配置上传事件
            editor.config.menus = $.map(wangEditor.config.menus, function (item, key) {
                if (item === 'location') {
                    return null;
                }
                return item;
            });
            editor.create();
            if (self.dataBothway) {
                editor.onchange = function () {
                    // 编辑区域内容变化时，实时打印出当前内容
                    self.$emit("increment", editor.$txt.html())
                }
            }
        },
        methods: {}
    }
</script>