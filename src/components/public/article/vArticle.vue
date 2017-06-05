<template lang="html">
  <div class="article">
    <header class="header main-title">
      <h2>{{articleIndex.title}}</h2>
      <p class="time">{{articleIndex.time}}</p>
    </header>
    <div class="video-group">
      <video class="video" :src="articleIndex.video" width="100%" controls autoplay="autoplay">
      </video>
      <p class="video-desc">{{articleIndex.video_desc}}</p>
    </div>
    <article class="main-content">
      <p class="article-content">
        {{articleIndex.article}}
      </p>
    </article>
  </div>
</template>

<script>
export default {
  props: ['articleIndex']
}
</script>

<style lang="stylus" scoped>
.article
  background-color #fff
  margin-top 1.2667rem
  .header
    padding .4rem
    h2
      font-size .544444rem
    p
      margin-top .2rem
      color #828696
      margin-bottom .3rem
  .video-group
    margin-bottom .3rem
    .video-desc
      padding .3rem
      text-align center
      color #828696
      font-size .3rem
  .main-content
    padding 0 .4rem 2rem .4rem
    .article-content
      font-size .5rem
      letter-spacing 1px

</style>
