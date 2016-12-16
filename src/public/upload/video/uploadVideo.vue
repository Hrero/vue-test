<template>
    <div>
        <div id="videoUploader" style="margin-top: 10px;background: red;height:50px;">
            <div id="videoPickfiles">
                <img src="./addvideo.png"/>
            </div>
        </div>
        <div class="ui indicating progress uploadVideo" :data-value="zhi" style="display:none;">
            <div class="bar">
                <div class="progress"></div>
            </div>
            <div class="label"></div>
        </div>
    </div>
</template>

<script>
    import config from "../../../../server/qiniu/qiniu-conf"
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
                uploadVideo = $('.ui.uploadVideo');
            Qiniu.uploader({
                runtimes: 'html5,flash,silverlight,html4',    //上传模式,依次退化
                uptoken_url: '/qiniu/token/mp4',                    //Ajax请求upToken的Url
                browse_button: 'videoPickfiles',              // you can pass in id...
                domain: config.hxScopeUrl,                          //bucket 域名，下载资源时用到
                container: 'videoUploader',
                chunk_size: '4mb',                            //分块上传时，每片的体积
                flash_swf_url: '../Moxie.swf',
                filters: {
                    max_file_size: '2048mb',                    //最大文件体积限制
                    mime_types: [
                        {title: "video/mpeg", extensions: "mp4"},
                        {title: 'video/x-msvideo', extensions: 'avi'}
                    ]
                },
                auto_start: true,                             //选择文件后自动上传，若关闭需要自己绑定事件触发上传
                init: {
                    PostInit: function () {
                        //$('#audioUploader').find('input[type=file]').css("cursor","pointer");//上传视频按钮，鼠标移过去变成小手
                    },
                    FilesAdded: function (up, files) {
                        plupload.each(files, function (file) {
                            // 文件添加进队列后,处理相关的事情
                            console.log(file);
                            uploadVideo.progress({
                                total: 100
                            });
                        });
                    },
                    BeforeUpload: function (up, file) {
                        // 每个文件上传前,处理相关的事情
                        uploadVideo.show();
                        uploadVideo.progress("set progress", "0%");
                    },
                    UploadProgress: function (up, file) {
                        // 每个文件上传时,处理相关的事情
                        let obj = self.bytesToSize(file.size),
                            active = (obj.number * file.percent / 100).toFixed(2) + obj.unit;
                        uploadVideo.progress("set progress", file.percent + "%");
                        uploadVideo.progress("set label", active + " / " + obj.value);
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
                        uploadVideo.progress("set label", "上传完成");
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