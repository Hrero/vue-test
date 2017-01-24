<template>
    <div>
        <div id="fileUploader" style="margin-top: 10px;background: red;height:50px;">
            <div id="fileupload">
                点击添加文件
            </div>
        </div>
        <div class="ui indicating progress uploadFile" :data-value="zhi" style="display:none;">
            <div class="bar">
                <div class="progress"></div>
            </div>
            <div class="label"></div>
        </div>
    </div>
</template>

<script>
    import config from "../../../../server/routes/qiniu/qiniu-conf"
    export default {
        data () {
            return {
                zhi: 0
            }
        },
        methods: {
            bytesToSize (value) {
                if (value <= 1024) {
                    return value + "B";
                }
                let k = 1024, // or 1024
                    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                    i = Math.floor(Math.log(value) / Math.log(k)),
                    number = (value / Math.pow(k, i)).toPrecision(3),
                    unit = sizes[i];
                return {
                    value: number + unit,
                    number: number,
                    unit: unit
                };
            }
        },
        mounted () {
            let self = this,
                uploadFile = $('.ui.uploadFile');
            Qiniu.uploader({
                runtimes: 'html5,flash,html4',    //上传模式,依次退化
                browse_button: 'fileupload',       //上传选择的点选按钮，**必需**
                uptoken_url: '/qiniu/token/mp4',            //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
                // uptoken : '', //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
                // unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
                // save_key: true,   // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK会忽略对key的处理
                domain: config.hxScopeUrl,   //bucket 域名，下载资源时用到，**必需**
                get_new_uptoken: false,  //设置上传文件的时候是否每次都重新获取新的token
                //container: 'fileUploader',           //上传区域DOM ID，默认是browser_button的父元素，
                max_file_size: '10mb',           //最大文件体积限制
                flash_swf_url: '../Moxie.swf',  //引入flash,相对路径
                max_retries: 3,                   //上传失败最大重试次数
                //dragdrop: true,                   //开启可拖曳上传
                //drop_element: 'fileUploader',        //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                chunk_size: '4mb',                //分块上传时，每片的体积
                auto_start: true,                 //选择文件后自动上传，若关闭需要自己绑定事件触发上传
                filters: {
                    mime_types: [
                        {title: "video/word", extensions: "docx"}
                    ]
                },
                init: {
                    PostInit: function () {
                        //$('#audioUploader').find('input[type=file]').css("cursor","pointer");//上传视频按钮，鼠标移过去变成小手
                    },
                    FilesAdded: function (up, files) {
                        plupload.each(files, function (file) {
                            // 文件添加进队列后,处理相关的事情
                            console.log(file);
                            uploadFile.progress({
                                total: 100
                            });
                        });
                    },
                    BeforeUpload: function (up, file) {
                        // 每个文件上传前,处理相关的事情
                        uploadFile.show();
                        uploadFile.progress("set progress", "0%");
                    },
                    UploadProgress: function (up, file) {
                        // 每个文件上传时,处理相关的事情
                        let obj = self.bytesToSize(file.size),
                            active = (obj.number * file.percent / 100).toFixed(2) + obj.unit;
                        uploadFile.progress("set progress", file.percent + "%");
                        uploadFile.progress("set label", active + " / " + obj.value);
                    },
                    FileUploaded: function (up, file, response) {
                        // 每个文件上传成功后,处理相关的事情
                        // 其中 info 是文件上传成功后，服务端返回的json，形式如
                        // {
                        //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                        //    "key": "gogopher.jpg"
                        //  }
                        var res = JSON.parse(response);
                        console.log(res);
                        uploadFile.progress("set label", "上传完成");
                    },
                    Error: function (up, err) {
                        //上传出错时,处理相关的事情
                        console.log(err);
                    }
                }
            });
        }
    }
</script>