<template lang="html">
<div class="article">
  <div class="head">
    <div class="clearfix">
      <div class="head__main"><span>资讯详情</span></div>
      <div class="head__left">
        <router-link to="" v-on:click.native="goback" class="goback"></router-link>
      </div>
      <div class="head__right">
      </div>
    </div>
  </div>
  <!--<video src="http://117.169.70.21/sports.tc.qq.com/A6erwXwUH0HqO09YTjKznAYmbd_i3r-KoyISm1wLnlZE/f00231mb14t.p412.1.mp4?sdtfrom=v1010&guid=c30fef51bf21ba70e892b2a0a6c3bf7c&vkey=1F1A3F54589E9AE5A87B5EDBF714BA158C19895FEFC34336ADD4DC7126B60E6FEA69BF28D97208A9FC8FB32CCE05E48D50B963C85627DBC252A108C3A37A51404FF632F8C6BD50BCB130CAFC6AC881675DC36CD4CB560CFAD6F4F9FDFAD7AD222CDE2B70B6347645A6D83ABFDDE0BBF3&locid=cbe98856-3883-46a3-bd8d-c2aaaf771128&size=15907053&ocid=240391596" width="200" height="200" controls>
  </video>-->
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

<style lang="stylus">
.head
  position fixed
  top 0
  height 1.32666667rem
  width 100%
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
        margin-top .3266667rem
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
