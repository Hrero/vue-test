<template>
    <div id="product">
        <uploadVideo></uploadVideo>
        <p @click="deleteVideo()">删除视频</p>
    </div>
</template>

<script>
    import uploadVideo from '../../public/upload/video/uploadVideo';
    export default {
        data () {
            return {}
        },
        computed: {},
        mounted () {
            console.log(baseData.gradeAll);
        },
        methods: {
            deleteVideo () {
                $.get("/qiniu/deleteVideoId?file=Carly Rae Jepsen - 超级面对面 第90期 Carly Rae Jepsen：我可不只是“蹲妹”.mp4").then((data) => {
                    console.log(data);
                })
            }
        },
        components: {
            uploadVideo
        }
    }
</script>

<style>
    #product {
        width: 100%;
        height: 100%;
    }
</style>
