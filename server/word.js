var express = require('express');
var router = express.Router();
var officegen = require('officegen');
var fs = require('fs');
var path = require('path');
var docx = officegen ( 'docx' );


/**
 * 导出word
 */
/*function initP (word) {
    word.replace(/<p>/g, "#&P");
    word.replace(/<\/p>/g, "");
}*/
function Pleng(word){
    var arr = word.split("#&P");
    var leng = 0;
    word = word.replace(/#&P/g, function(){
        leng++;
        return "";
    });
    return {
        value: word,
        leng: leng
    };

}
router.get("/", function(req, res) {
    /*var data = req.query.data;
     if(data){
     console.log('exportWord-------------');
     docx.on ( 'finalize', function ( written ) {
     console.log ( 'Finish to create Word file.\nTotal bytes created: ' + written + '\n' );
     });
     docx.on ( 'error', function ( err ) {
     console.log ( err );
     });
     "#P1.接口是否连接速度（）#P1.接口是否连接速度（）#P1.接口是否连接速度（）"
     var P = null;
     var PArr = [];
     for(k in data){
     if(k == "stem"){
     PArr = data[k].split("#&P").splice(1);
     P = docx.createP ();

     }
     }
     var pObj = docx.createP ();
     pObj.addText ( '一、血液透析（滤过）能有效清除身体内过多的水分合' );
     pObj.addMath ( '<m:oMathPara><m:oMath><m:sSup><m:sSupPr><m:ctrlPr></m:ctrlPr></m:sSupPr><m:e><m:r><w:rPr><w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/></w:rPr><m:t>y</m:t></m:r></m:e><m:sup><m:r><w:rPr><w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/></w:rPr><m:t>2</m:t></m:r></m:sup></m:sSup></m:oMath></m:oMathPara>' );
     pObj.addText ( '霉素，是治疗急性和慢性肾衰竭等疾病的有效方法。' );
     var out = fs.createWriteStream ( 'out.docx' );// 文件写入

     out.on ( 'error', function ( err ) {
     console.log(err);
     });
     var result = docx.generate (out);// 服务端生成word


     res.writeHead ( 200, {
     // 注意这里的type设置，导出不同文件type值不同application/vnd.openxmlformats-officedocument.presentationml.presentation
     "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
     'Content-disposition': 'attachment; filename=out.docx'
     });
     docx.generate (res);

     /!* for(k in data){
     if(k == "stem"){

     }
     }*!/
     }*/




    /* var pObj = docx.createP ( { align: 'center' } );// 创建行 设置居中
     pObj.addText ( '血液透析（滤过）治疗知情同意书', { bold: true,font_face: 'Arial', font_size: 18 });// 添加文字 设置字体样式 加粗 大小


     var pObj = docx.createP ();
     pObj.addText ( '姓名' );
     pObj.addText ( ' with color', { color: '000088' } );// 设置字体颜色
     pObj.addText ( '性别' );
     pObj.addText ( '', { color: '00ffff', back: '000088' } );
     pObj.addText ( '年龄' );
     pObj.addText ( '岁', { color: '000088' } );


     var pObj = docx.createP ();
     pObj.addText ( '门诊（住院）号' );
     pObj.addText ( ' with color', { color: '000088' } );
     pObj.addText ( '诊断' );
     pObj.addText ( '', { color: '000088'} );*/



    /*var pObj = docx.createP ();
     pObj.addText ( '二、血液透析（滤过）治疗时，首先需要将患者血液引到体外，然后通过透析或滤过等方法清除水分和霉素，经受理后的血液再回到患者体外。' );
     var pObj = docx.createP ();
     pObj.addText ( '三、为了有效引出血液，治疗前需要建立血管通路（动静脉内痿或深静脉插管）。' );
     var pObj = docx.createP ();
     pObj.addText ( '四、为防止血液在体外管路和透析器发生凝固，一般需要在透析前和透析过程中注射肝素等抗凝药物。' );
     var pObj = docx.createP ();
     pObj.addText ( '五、血透过程中和治疗期间存在下列医疗风险，可能造成严重后果，甚至危及生命：' );
     var pObj = docx.createP ();
     pObj.addText ( '1.低血压，心力衰竭，心肌梗塞，心律失常，脑血管意外；' );
     var pObj = docx.createP ();
     pObj.addText ( '2.空气球栓塞；' );
     var pObj = docx.createP ();
     pObj.addText ( '3.过敏反应；' );

     var pObj = docx.createP ();
     pObj.addText ( '<m:oMathPara><!-- mathematical block container used as a paragraph --><m:oMath><!-- mathematical inline formula --><m:f><!-- a fraction --><m:num><m:r><m:t>π</m:t></m:r></m:num><!-- numerator containing a single run of text --><m:den><m:r><m:t>2</m:t></m:r></m:den><!-- denominator containing a single run of text --></m:f></m:oMath></m:oMathPara>' );


     */





 /*   var result = docx.generate (out);// 服务端生成word


    res.writeHead ( 200, {
// 注意这里的type设置，导出不同文件type值不同application/vnd.openxmlformats-officedocument.presentationml.presentation
        "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        'Content-disposition': 'attachment; filename=out.docx'
    });

    docx.generate (res);// 客户端导出word*/
})


module.exports = router;