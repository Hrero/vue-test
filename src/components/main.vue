<template>
    <div id="main" class="positionCenter">
        <h2>易教空间资源库系统录入平台</h2>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fangzi"></use>
        </svg>
    </div>
</template>

<script>
    import "../css/main.scss";
    import "../iconfont/iconfont.js"
    export default {
        data () {
            return {
                nav: ["产品","资源","知识点录入","课程管理","数据字典"]
            }
        }
    }
</script>