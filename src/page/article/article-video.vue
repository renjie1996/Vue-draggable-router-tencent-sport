<template lang="html">
  <div class="article-video">
    <v-header class="header">
      <p>骑士 vs 勇士</p>
    </v-header>
    <video src="http://xurenjie.cn:3000/video/video4.mp4" width="100%" controls autoplay="autoplay"></video>
    <div class="live-group">
      <section class="live__board">
        <div class="board__left">
          <span class="teamA">
            <img src="http://xurenjie.cn:3000/img/img/warriors.png" class="teamA__img">
            <span class="teamA__goal">113</span>
          </span>
        </div>
        <div class="board__center">
          <p class="time">5月7日 08:30</p>
          <p class="game__name">NBA季后赛</p>
        </div>
        <div class="board__right">
          <span class="teamB">
            <span class="teamB__goal">91</span>
            <img src="http://xurenjie.cn:3000/img/img/cavaliers.png" class="teamB__img">
          </span>
        </div>
      </section>
      <div class="live__article">
        <h3 class="article__title">相关新闻</h3>
        <div class="new-list page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
          <new-item class="new-item page-infinite-listitem" v-for="newItem in newArr" :newItem="newItem"></new-item>
          <p v-show="loading" class="page-infinite-loading">
            <mt-spinner type="fading-circle"></mt-spinner>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from '../../components/public/article/vHeader'
import newItem from '../../components/public/newItem'
export default {
  mounted () {
    this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/recommend')
      .then((response) => {
        // console.log(response.data.newArr[0][0])
        this.newArr = response.data.newArr[0]
        // console.log(this.newArr)
      })
      .catch((error) => {
        console.log(error) 
      })
  },
  data () {
    return {
      newArr: [],
      getNum: 0,
      list: [],
      // 刷新圈
      loading: false,
      allLoaded: false,
      // 页面容器高度
      wrapperHeight: 1000
    }
  },
  components: {
      vHeader,
      newItem
  },
  methods: {
    loadMore() {
      this.loading = true
      this.getNum ++
      this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/recommend1')
      .then((response) => {
        // console.log(response)
        // console.log(response.data.newArr[0][0])
        response.data.newArr[0].map(item => {
          this.newArr.push(item)
        })
        this.loading = false
        // console.log(this.newArr)
      })
      .catch(function (error) {
        console.log(error) 
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.page-infinite-loading
  margin-left 4.6rem
  margin-top .4rem
  font-size .2rem
  color #ddd
.article-video
  background-color #fff
  .header
    position absolute
    background-color transparent
    p
      font-weight 500
    &:after
      display none
  .live-group
    width 100%
    position relative
    .live__board
      background-color #fff
      display flex
      padding .4rem
      .board__left
        flex 2
        text-align left
        .teamA
          position relative
          .teamA__goal
            font-size 1rem
          .teamA__img
            margin-right .1rem
            vertical-align top
            width 1.366667rem
            height 1.366667rem
      .board__center
        flex 1
        text-align center
      .board__right
        flex 2
        text-align right
        .teamB
        position relative
          .teamB__goal
            font-size 1rem
            margin-right .1rem
          .teamB__img
            vertical-align top
            width 1.366667rem
            height 1.366667rem
  .live__article
    width 100%
    position relative
    height 9.78rem
    overflow-y scroll
    overflow-x hidden
    .article__title
      font-weight 400
      opacity .6
      font-size .46667rem
      text-align center
      padding .2rem 0
      
  


</style>
