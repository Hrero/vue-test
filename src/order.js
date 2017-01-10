import Vue from 'vue'
import $ from "jquery"


// 富文本公式
Vue.directive('ueditor', {
    update: function (el, binding) {
        el.innerHTML = binding.value;
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, el]);
    }
});


module.exports = Vue;

