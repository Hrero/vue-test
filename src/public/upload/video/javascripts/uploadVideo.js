

module.exports = function(){
  var videoDomain = '7vil13.com2.z0.glb.qiniucdn.com';
  var videoUploader = Qiniu.uploader({
    runtimes: 'html5,flash,silverlight,html4',    //上传模式,依次退化
    uptoken_url: '/qiniu/token/mp4',                    //Ajax请求upToken的Url
    browse_button: 'videoPickfiles',              // you can pass in id...
    domain: videoDomain,                          //bucket 域名，下载资源时用到
    container:'videoUploader',
    chunk_size: '4mb',                            //分块上传时，每片的体积
    flash_swf_url: '../Moxie.swf',
    filters: {
      max_file_size: '2048mb',                    //最大文件体积限制
      mime_types: [
        {title : "video/mpeg", extensions : "mp4"},
        {title:'video/x-msvideo', extensions:'avi'}
      ]
    },
    auto_start: true,                             //选择文件后自动上传，若关闭需要自己绑定事件触发上传
    init: {
      PostInit: function () {
        $('#videoPickfiles').find('input[type=file]').css("cursor","pointer");  //上传视频按钮，鼠标移过去变成小手
      },
      FilesAdded: function (up, files) {
        plupload.each(files, function(file) {
          // 文件添加进队列后,处理相关的事情
        });
      },
      BeforeUpload: function(up, file) {
        //console.log(file);
        // 每个文件上传前,处理相关的事情
         /* $.get("http://7vil13.com2.z0.glb.qiniucdn.com/"+file.name,(data) => {
            "use strict";
            console.log(data);
          })*/
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
        var res= eval('('+response+')');
        console.log(res);
      },
      Error: function (up, err) {
        //上传出错时,处理相关的事情
        alert("code:"+err.code+"message:"+err.message);
      }
    }
  });
};

function randomString(len) {
  len = len || 32;
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  var maxPos = $chars.length;
  var pwd = '';
  for (var i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

function bytesToSize(bytes) {
  if (bytes === 0) return '0 B';
  var k = 1000, // or 1024
    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
};
