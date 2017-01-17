<template>
    <div id="product">
        <h2 @click="outWord">输出word</h2>
        <h2 @click="getOmml">获取omml</h2>
        <input v-model="latex" />
      <!--  <form action="http://192.168.1.136:8080/jeecg/rest/papers/getOmml2" method="post">
            <input name="latex" value="" />
            <input type="submit" value="提交" @click="post($event)"/>
        </form>-->
    </div>
</template>

<script>
    export default {
        data () {
            return {
                masger: "组件product",
                latex: ""
            }
        },
        methods: {
            outWord () {
                //$.post("/course/independent/getQuestionById", {id: "8a2a746856ea6fb101570d0432893b91", subject: "1"}, function(data){
                    //data = JSON.parse(data);
                    $.get("/outWord?data=" + 5555, function(result){
                        console.log(result);
                    })
                //})
            },
            getOmml () {
                $.post("/course/independent/getOmml", {"latex": "y^{2}"}, function(data){
                    //data = data.replace(/\\n\s*?/g, "");
                    console.log(data);
                })
            }
        }
    }
</script>