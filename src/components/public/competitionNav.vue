<template lang="html">
  <div class="compete-nav">
    <router-link v-for="game in games" :to="game.url" class="card">
      <div class="header">{{game.title}}</div>
      <div class="content">
        <div class="content-left">
          <img v-lazy="game.playerImg1" alt="">
          <p>{{game.player1}}</p>
        </div>
        <div class="content-middle">
          <p class="date">{{game.date}}</p>
          <p class="order">预约</p>
        </div>
        <div class="content-right">
          <img v-lazy="game.playerImg2" alt="">
          <p>{{game.player2}}</p>
        </div>
      </div>
    </router-link>
    <router-link to="/agenda/all" class="footer">
      <span>查看NBA完整赛程排行<img src="../../assets/img/前进.png" alt=""></span>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ['games']
}
</script>

<style lang="stylus" scoped>
.compete-nav
  height 3.126666rem
  width 100%
  position relative
  text-align center
  background-color #fff
  .card
    height 2.326666666rem
    float left
    width 50%
    position relative
    .header
      height .383333rem
      text-align center
      color #b2b9cb
    .content
      height 1.94333333rem
      display flex
      .content-left
      .content-middle
      .content-right 
        flex 1
        text-align center
        &:after
          content ''
          display block
          height 1.8888888rem
          width 1px
          background-color #edeff2
          position absolute
          top .2rem
          left 0
          transform scaleX(.5)
        img
          margin 0 auto
          display block
          width .9rem
          height .9rem
        p
          color #36393f
      .content-middle
        .date
          margin-top .206667rem
          margin-bottom .08rem
          font-size .4rem
        .order
          background-color #edeff2
          border-radius .2rem
    &:after
      content ''
      display block
      height 1px
      width 100%
      background-color #edeff2
      transform scaleY(.5)
      clear both
  .footer
    width 100vh
    height .8rem
    position relative
    span
      height 100%
      line-height .8rem
      font-size .4rem
      color #828597
      img
        vertical-align middle
        margin-left .2rem
        width .4rem
        height .4rem
      &:after
        content ''
        display table
        visibility hidden
        clear both

</style>
