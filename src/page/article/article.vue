<template lang="html">
<div class="article">
  <v-header></v-header>
  <v-article :articleIndex="articleIndex"></v-article>
  <!--<video class="video" src="http://117.41.241.11/sports.tc.qq.com/c0023f88cqn.p401.1.mp4?sdtfrom=v1010&guid=903fa06222168e65ab86b0144db988b2&vkey=A11545883178B5737CA2655516DE6E9784445E9A04FC60FBC25956C0A09BC529637624A616D50FECFF6D8998BAFE0354728A77667A0355BE918D5757A13480C5BEF469212CCE9DEC88DD4099EAAA07F98AD41A1DF7E80D964869916E1284A76FFC12DE4019CE4CE91E1BBC3805B42BD8" width="100%" controls>
  </video>-->
</div>
</template>
<script>
import vHeader from '../../components/public/article/vHeader'
import vArticle from '../../components/public/article/vArticle'
export default {
  components: {
    vHeader,
    vArticle
  },
  data () {
    return {
      articleIndex: {}
    }
  },
  mounted () {
    //  console.log(this.$route.params.id)
     this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/main-article' + this.$route.params.id)
      .then((response) => {
        this.articleIndex = response.data
      })
      .catch((error) => {
        console.log(error) 
      })
  }
}
</script>

<style lang="stylus" scoped>
.video {
  height 5.6888rem
  width 10rem
  margin-top 1.2667rem
}
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
