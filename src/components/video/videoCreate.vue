<template>
    <div id="product">
      <div id="videoUploader" style="margin-top: 10px;background: blue;height:50px;">
        <div id="videoPickfiles">
          <img src="../../public/upload/video/images/addvideo.png" />
        </div>
      </div>
      <p @click="deleteVideo()">删除视频</p>
    </div>
</template>

<script>
  import uploadVideo from '../../public/upload/video/javascripts/uploadVideo';
  //import axios from "axios"

export default {
  data () {
    return {

    }
  },
  computed: {
  },
  mounted () {
    uploadVideo();
  },
  methods: {
    deleteVideo () {
      /*axios.get("/qiniu/deleteVideoId?file=QQ截图20161208152825.png").then((data) => {
        console.log(data.data);
      })*/
    }
  },
  components: {}
}
</script>

<style>
  #product{
    width: 100%;
    height: 100%;
  }
</style>
