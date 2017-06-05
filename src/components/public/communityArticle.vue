<template>
<router-link :to="article.url">
  <div class="article">
    <header class="header">
      <h2>{{article.title}}</h2>
    </header>
    <p class="desc">
      {{article.desc}}
    </p>
    <div class="content">
      <img class="content__img" v-if="article.imgArr.length <= 1" v-for="img in article.imgArr" v-lazy="img" alt="">
      <img class="content__img--double" v-if="article.imgArr.length > 1" v-for="img in article.imgArr" v-lazy="img" alt="">
    </div>
    <footer class="footer">
      <div class="article__author--left">
        <p><span class="author__name">{{article.author}}</span>来自<span class="author__posi">{{article.posi}}</span></p>
      </div>
      <div class="article__commit--right">
        211
      </div>
    </footer>
  </div>
</router-link>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style lang="stylus" scoped>
.article
  background-color #fff
  padding .4rem .4rem 0.02rem .2rem
  position relative
  .header
    h2
      color #333
      font-size .43666666rem
      margin-bottom .2rem
  .desc
    font-size .3333333rem
    color #818597
    margin-bottom .3rem
  .content
    .content__img--double
      display block
      float left
      width 2.96rem
      margin-right .1666667rem
      margin-bottom .166667rem
      height 2.3333rem
    .content__img
      width 5.20rem
      height 4.3333rem
      margin-bottom .166667rem
    &:after
        content: ''
        display table
        visibility hidden
        clear both
  .footer
    font-size .3rem
    .article__author--left
      float left
      p
        color #a7aaab
        margin-top .1rem
        margin-bottom .2rem
        .author__name
          margin-right .1rem
          color #3466f6
        .author__posi
          margin-left .1rem
          color #3466f6
    .article__commit--right
      margin-top .1rem
      float right
      color #a7aaab
    &:after
      content: ''
      display table
      visibility hidden
      clear both
  &:after
    position absolute
    content: ''
    height 1px
    width 100%
    transform scaleY(.5)
    background-color #edeff2
</style>
