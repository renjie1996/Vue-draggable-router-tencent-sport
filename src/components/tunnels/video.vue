<template lang="html">
  <div class="video">
    <video-card class="video-card"></video-card>
    <video-card class="video-card"></video-card>
    <video-card class="video-card"></video-card>
  </div>
</template>
<script>
import videoCard from '../public/videoCard'
export default {
  components: {
    'videoCard': videoCard
  }
}
</script>

<style lang="stylus" scoped>
.video
  position absolute
  top 1.5666667rem
  width 100%
  overflow-y scroll
  padding-bottom 2rem
  .video-card
    background-color #fff
    margin-top .2rem
</style>
