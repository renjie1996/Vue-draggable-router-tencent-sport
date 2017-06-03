<template lang="html">
  <div class="all">
    <side-nav class="side-nav" v-on:switchNav="switchNav"></side-nav>
    <div class="content">
      <div class="content-item" v-for="item in clubItems">
        <div class="item__left">
          <img :src="item.img" alt="">
        </div>
        <div class="item__center">
          <h3>{{item.name}}</h3>
          <p>{{item.fans}}粉丝</p>
        </div>
        <div class="item__right">
          <p :class="{isSelect: item.selected}" :data-index="item.index" @click="switchSelect">✓</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sideNav from './layout/sideNav'
export default {
  mounted () {
    this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/club/recommend')
      .then((response) => {
        let tempclubItems = response.data.map(item => {
          let oItem = item
          this.$store.state.clubs.forEach(club => {
            if(club.name == item.name) {
              item.selected = true
            }
          })
        })
        this.clubItems = response.data
      })
      .catch(function (error) {
        console.log(error) 
      })
  },
  data () {
    return {
      clubItems: []
    }
  },
  components: {
    sideNav
  },
  methods: {
    // 改变选择与否状态
    switchSelect () {
      // console.log(event.target.dataset)
      let oClub = this.clubItems[event.target.dataset.index]
      if(oClub.selected === false) {
        // 加入社团
        // console.log(oClub)
        this.$store.dispatch('add_club', oClub)
      } else {
        this.$store.dispatch('delete_club', oClub)
      }
      this.clubItems[event.target.dataset.index].selected = !oClub.selected
    },
    // 对比store和请求块
    switchNav (url) {
      // console.log(url)
      this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/club/' + url)
        .then((response) => {
        // 选出选中的
        let tempclubItems = response.data.map(item => {
          let oItem = item
          this.$store.state.clubs.forEach(club => {
            if(club.name == item.name) {
              item.selected = true
            }
          })
        })
        this.clubItems = response.data
      })
      .catch(function (error) {
        console.log(error) 
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.all
  position absolute
  top 1.266667rem
  display flex
  flex-direction row
  .content
    flex 1
    position relative
    width 7.3333333rem
    background-color #fff
    opacity .95
    height 16rem
    overflow-y scroll
    .content-item
      display flex
      flex-direction row
      width 100%
      position relative
      margin-bottom .1rem
      .item__left
        img
          width .98rem
          height 1rem
          padding .1rem
          border-radius 999px
          margin-left .3rem
          margin-top .2rem
      .item__center
        flex 1
        h3
          font-size .4rem
          margin-left .3rem
          margin-top .2rem
        p
          font-size .2rem
          color #8e8e8f
          margin-left .3rem
      .item__right
        p
          margin-right .3rem
          margin-top .4rem
          font-size .4rem
          padding .02rem .12rem
          border-radius 50px
          color #cfcfd4
          border 1px solid #cfcfd4
        .isSelect
          background-color #3466f5
          color #fff
      &:after
        content: ''
        position absolute
        bottom 0
        left .26667rem
        background-color #ecf0f4
        height 1px
        width 95%
        transform scaleY(.5)
    
</style>
