<template lang="html">
  <div class="card">
    <router-link to="/">
      <div class="card__header">
        <div class="header__left">全景NBA-5月30日</div>
        <div class="header__right">往期回顾</div>
      </div>
      <div class="card__centent">
        <div class="main__new">
          <div class="new__index" :style="{backgroundImage: 'url(' + imgUrl + ')'}">
            <span class="duration">02:41</span>
          </div>
          <div class="new__desc">
            骑士勇士总决赛十佳球 欧文颜射詹皇追帽
          </div>
        </div>
        <ul class="small__new-list">
          <li class="small__new-item">
            <div class="new-item__index" :style="{backgroundImage: 'url(' + imgUrl + ')'}">
              <div class="duration">02:41</div>
            </div>
            <div class="new-item__desc">
              骑士勇士总决赛十佳球 欧文颜射詹皇追帽
            </div>
          </li>
          <li class="small__new-item">
            <div class="new-item__index" :style="{backgroundImage: 'url(' + imgUrl + ')'}">
              <div class="duration">02:41</div>
            </div>
            <div class="new-item__desc">
              骑士勇士总决赛十佳球 欧文颜射詹皇追帽
            </div>
          </li>
          <li class="small__new-item">
            <div class="new-item__index" :style="{backgroundImage: 'url(' + imgUrl + ')'}">
              <div class="duration">02:41</div>
            </div>
            <div class="new-item__desc">
              骑士勇士总决赛十佳球 欧文颜射詹皇追帽
            </div>
          </li>
          <li class="small__new-item">
            <div class="new-item__index" :style="{backgroundImage: 'url(' + imgUrl + ')'}">
              <div class="duration">02:41</div>
            </div>
            <div class="new-item__desc">
              骑士勇士总决赛十佳球 欧文颜射詹皇追帽
            </div>
          </li>
        </ul>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrl: 'http://xurenjie.cn:3000/img/img/new-item-1.jpeg'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .card
    margin 0
    padding 0
    width 100%
    margin 0 0 0 0
    .card__header
      height 1.166667rem
      line-height 1.166667rem
      color #000
      .header__left
        float left
        font-size .42666667rem
        margin-left .266667rem
        font-weight 400
      .header__right
        float right
        position relative
        font-size .23666667rem
        margin-right .52666666rem
        &:after
          content ''
          display block
          height 0.14667rem
          width 0.14667rem
          position absolute
          top .46667rem
          right -0.2rem
          border-top .03rem solid #828597
          border-right .03rem solid #828597
          transform rotate(45deg)
      &:after
        content ''
        display table
        clear both
        visibility hidden
    .card__centent
      .main__new
        .new__index
          width 100%
          height 5.66666667rem
          background-size cover
          background-repeat no-repeat
          position relative
          .duration
            color #fff
            font-size .3rem
            font-weight 500
            position absolute
            bottom .13333rem
            right .13333rem
        .new__desc
          width 100%
          padding .133333rem
          font-size .42666667rem
          color #000
      .small__new-list
        width 100%
        position relative
        .small__new-item
          width 4.92rem
          height 3.66666667rem
          float left
          position relative
          margin-top .2rem
          &:nth-child(odd)
            margin-right .16rem
          .new-item__index
            width 100%
            height 2.666666667rem
            position relative
            .duration
              color #fff
              font-size .3rem
              font-weight 500
              position absolute
              bottom .13333rem
              right .13333rem
            &:after
              content ''
              display table
              clear both
              visibility hidden
          .new-item__desc
            margin .1rem
            color #000
            white-space normal

        &:after
          content ''
          display table
          clear both
          visibility hidden
    &:after
      content ''
      display table
      clear both
      visibility hidden
</style>
