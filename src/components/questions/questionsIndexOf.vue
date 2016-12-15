<template>
    <div id="radio">
        <div id="audioUploader" style="margin-top: 10px;background: red;height:50px;">
            <div id="filePickfiles">
                <img src="../../public/upload/radio/images/addvoice.png" />
            </div>
        </div>
        <p @click="deleteRadio()">删除音频</p>
    </div>
</template>

<script>
    import uploadRadio from '../../public/upload/radio/javascripts/uploadRadio';
    //import axios from "axios"
    export default {
        data () {
            return {

            }
        },
        mounted () {
            uploadRadio();
        },
        methods : {
            deleteRadio () {
                /*axios.get("/qiniu/deleteRadioId?file=音乐.mp3").then((data) => {
                    console.log(data.data);
                })*/
            }
        }
    }
</script>

<style>
    #radio{
        width: 100%;
        height: 100%;
    }
</style>