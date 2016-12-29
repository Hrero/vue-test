<template>
    <div id="radio">
        <uploadRadio></uploadRadio>
        <p @click="deleteRadio()">删除音频</p>
    </div>
</template>

<script>
    import uploadRadio from "../../public/upload/radio/uploadRadio.vue"
    export default {
        data () {
            return {}
        },
        mounted () {

        },
        methods: {
            deleteRadio () {
                $.get("/qiniu/deleteRadioId?file=A Teens - Firefly.mp3").then((data) => {
                    console.log(data);
                })
            }
        },
        components: {
            uploadRadio
        }
    }
</script>

<style>
    #radio {
        width: 100%;
        height: 100%;
    }
</style>