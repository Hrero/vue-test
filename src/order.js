import Vue from 'vue'
import $ from "jquery"


// 富文本公式
Vue.directive('ueditor', {
    update: function (el, binding) {
        el.innerHTML = binding.value;
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, el]);
    }
});
//分页
Vue.directive('page', {
    update: function (el, binding) {
        console.log(binding);
        let obj = binding.value,
            count = obj.pageCount;
        $(el).twbsPagination({
            pageCount: count,
            visiblePages: 7,
            onPageClick: function (event, page) {
                params.cp = page;
                times = setTimeout(ajax, 0);
            }
        });
    }



});

module.exports = Vue;

