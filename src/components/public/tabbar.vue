<template>
  <div class="tabbar" v-model="selected">
    <router-link to="/competition/recommend" class="tabbar__item" id="tabbar__item1" @click.native="setIndex(1)">
      <img v-if="selected != 1" src="../../assets/img/competition.png" alt="">
      <img v-if="selected === 1" src="../../assets/img/competition--active.png" alt="">
      <p v-if="selected != 1" class="icon">赛事</p>
      <p v-if="selected === 1" class="icon__active">赛事</p>
    </router-link>
    <router-link to="/community/hotpost" class="tabbar__item" id="tabbar__item2" @click.native="setIndex(2)">
      <img v-if="selected != 2" src="../../assets/img/community.png" alt="">
      <img v-if="selected === 2" src="../../assets/img/community--active.png" alt="">
      <p v-if="selected != 2" class="icon">社区</p>
      <p v-if="selected === 2" class="icon__active">社区</p>
    </router-link>
    <router-link to="/agenda/focus" class="tabbar__item" id="tabbar__item3" @click.native="setIndex(3)">
      <img v-if="selected != 3" src="../../assets/img/agenda.png" alt="">
      <img v-if="selected === 3" src="../../assets/img/agenda--active.png" alt="">
      <p v-if="selected != 3" class="icon">赛程</p>
      <p v-if="selected === 3" class="icon__active">赛程</p>
    </router-link>
    <router-link to="/mine" class="tabbar__item" id="tabbar__item5" @click.native="setIndex(5)">
      <img v-if="selected != 5" src="../../assets/img/mine.png" alt="">
      <img v-if="selected === 5" src="../../assets/img/mine--active.png" alt="">
      <p v-if="selected != 5" class="icon">我的</p>
      <p v-if="selected === 5" class="icon__active">我的</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: 1
      }
    },
    methods: {
      setIndex (n) {
        this.selected = n
      }
    },
    // 状态传回父容器
    watch: {
      selected: function (value) {
        // console.log(value)
        this.$emit('switchNav', value)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  a:-webkit-any-link 
    text-decoration none
  .tabbar
    position fixed
    bottom 0
    height 1.32666667rem
    width 100%
    background-color #fff
    opacity .95
    display flex
    &:before
      content ''
      position fixed
      height 1px
      width 100%
      background-color #d2d2d2
      transform scaleY(.35)
      -webkit-transform scaleY(.35)
    .tabbar__item
      text-align center
      flex 1
      img
        margin 0 auto
        display block
        margin-top .1rem
        margin-bottom .1rem
        width .66rem
        height .66rem
      .icon
        margin 0 auto
        font-size 12px
        color #d2d2d2
      .icon__active
        color #3466f6
      &.router-link-active 
        p 
          color #3466f6
</style>

