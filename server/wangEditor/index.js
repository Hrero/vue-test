// nodejs API 参考：http://nodeapi.ucdok.com/#/api/
// 需要本地安装 formidable ，参见 https://github.com/felixge/node-formidable
const express = require('express');
const formidable = require('formidable');
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const UPYUN = require('upyun');
const random = require('./random');
const upyunConf = require('./config');
const upyun = new UPYUN(upyunConf.bucket,upyunConf.operator,upyunConf.password);
// 文件将要上传到哪个文件夹下面
var uploadfolderpath = 'src/public/upload/img/images';

var ueditor = function(req, res){
	var form = new formidable.IncomingForm();
	// 处理 request
	form.parse(req, function (err, fields, files) {
		if (err) {
			return console.log('formidable, form.parse err');
		}
		var item;
		if (length === 0) {
            var length = 0;
            for (item in files) {
                length++;
            }
			console.log('files no data');
			return;
		}
		for (item in files) {
			var file = files[item];
			var tempfilepath = file.path;
			var type = file.type;
			var filename = file.name;
			var extname = filename.lastIndexOf('.') >= 0
							? filename.slice(filename.lastIndexOf('.') - filename.length)
							: '';
			if (extname === '' && type.indexOf('/') >= 0) {
				extname = '.' + type.split('/')[1];
			}
			filename = Math.random().toString().slice(2) + extname;
			var filenewpath = path.join(uploadfolderpath, filename);
			fs.rename(tempfilepath, filenewpath, function (err) {
				var result = '';
				if (err) {
					result = 'error|save error';
					res.send(result);
				} else {
					console.log('fs.rename done');
					//result = filenewpath + '/' + filename;
					var d=new Date();
					var path1='/'+ d.getFullYear() + (d.getMonth()+1) + d.getDate() + '/';
					var time = d.getTime();
					var filePath = path1 + time + random(4) + '.png';
					upyun.uploadFile(filePath,filenewpath,type,true,function(upErr1,result){
							fs.unlink(filenewpath);
							if(result.statusCode == 200){
									console.log('图片上传upyun成功：' + upyunConf.url + '' + filePath)
									result = upyunConf.url + '' + filePath;
									res.send(result);
							}else{
									console.log('upyun上传错误：' + upErr1);
									console.log('图片上传upyun失败');
							}
					})
				}
			});
		}
	});
};

module.exports = ueditor;
