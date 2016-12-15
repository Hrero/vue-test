<template>
    <div class="ui indicating progress" :data-value="zhi" id="example5">
        <div class="bar">
            <div class="progress"></div>
        </div>
        <div class="label"></div>
    </div>
</template>

<script>
    export default {
        prop: {

        },
        data () {
            return {
                zhi: 0,
                total: []
            }
        },
        methods: {
            bytesToSize (value) {
                if(value <= 1000){
                    return value + "B";
                }

            }
        },
        mounted () {
            let self = this;
            var audioDomain = 'cuotiben-mp3.qiniudn.com';
            var audioUploader = Qiniu.uploader({
                runtimes: 'html5,flash,silverlight,html4',
                uptoken_url: '/qiniu/token/audioAnalyzePath',
                browse_button: 'audioPickfiles', // you can pass in id...
                domain: audioDomain,//不要带http：//
                container:'audioUploader',
                chunk_size: '4mb',
                flash_swf_url: '../Moxie.swf',
                filters: {
                    max_file_size: '10mb',
                    mime_types: [
                        {title:'audio/mpeg', extensions:'mp3'}
                    ]
                },
                auto_start: true,
                init: {
                    PostInit: function () {
                        //$('#audioUploader').find('input[type=file]').css("cursor","pointer");//上传视频按钮，鼠标移过去变成小手
                    },
                    FilesAdded: function (up, files) {

                        plupload.each(files, function(file) {
                            // 文件添加进队列后,处理相关的事情
                            console.log(file);
                            let size = self.bytesToSize(file.size);
                            self.total.push(file.size)
                        });
                    },
                    BeforeUpload: function(up, file) {
                        // 每个文件上传前,处理相关的事情

                    },
                    UploadProgress: function(up, file) {
                        // 每个文件上传时,处理相关的事情
                    },
                    FileUploaded: function (up, file, response) {
                        // 每个文件上传成功后,处理相关的事情
                        // 其中 info 是文件上传成功后，服务端返回的json，形式如
                        // {
                        //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                        //    "key": "gogopher.jpg"
                        //  }
                        var res= JSON.parse(response);
                        console.log(res);
                        var key = res.key;
                        var n = key.length;
                        key = key.substring(0, n-4); //将mp4和avi的后缀名都改成mp4  //不是mp4 后台将转成mp4
                        var url = 'http://' + audioDomain + '/' + key + '.mp4';
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