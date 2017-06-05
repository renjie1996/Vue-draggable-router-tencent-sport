<template lang="html">
  <div class="head">
    <div class="clearfix">
      <div class="head__main"><span><slot>资讯详情</slot></span></div>
      <div class="head__left">
        <router-link to="" v-on:click.native="goback" class="goback"></router-link>
      </div>
      <div class="head__right">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // goback返回
    goback () {
      console.log(1)
      window.history.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.head
  position fixed
  top 0
  height 1.32666667rem
  width 100%
  z-index 999
  background-color #fff
  background-color #3466f6
  &:after
    content ''
    position absolute
    top 1.32666667rem
    left 0
    height 1px
    width 100%
    background-color #d2d2d2
    transform scaleY(.35)
    -webkit-transform scaleY(.35)
  .clearfix 
    clear both
    &:after 
      content ''
      clear both
      display table
      visibility hidden
      height 0
      zoom 1
    .head__left
    .head__right
    .head__main 
      float left
      color #fff
    .head__left
      height 1.32666667rem
      margin-left -100%
      left -1.32666667rem
      width 1.32666667rem
      .goback
        display block
        margin 0 auto
        margin-top .4666667rem
        width .33333rem
        height .33333rem
        border-top 1px solid #fff
        border-left 1px solid #fff
        transform rotate(-45deg)
      img
        display block
        margin 0 auto
        height .8rem
        width .8rem
        margin-top .2rem
    .head__right 
      height 1.32666667rem
      width 2.72666667rem
      margin-left -2.72666667rem
      right -2.72666667rem
      text-align right
      img
        display inline-block
        height .8rem
        width .8rem
        margin-top .2066667rem
        margin-right .5266667rem
        vertical-align middle
      .head__player
        margin-top 3.3266667rem
        margin-right .3266667rem
        height .6rem
        width .6rem  
    .head__main 
      text-align center
      width 100%
      font-size .43666667rem
      font-weight 400
      line-height 1.32666667rem     
      height 1.32666667rem 
</style>
