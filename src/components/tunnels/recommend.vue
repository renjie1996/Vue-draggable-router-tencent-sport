<template lang="html">
  <div class="recommend">
    <mt-loadmore
      class="mt-loadmore"
      top-pull-text="加载更多"
      top-drop-text="释放加载"
      ref="loadmore"
      @top-status-change="handleTopChange"
      :top-method="loadTop">
        <div class="headline" :style="{backgroundImage: 'url(' + imgUrl + ')'}">
          <p class="msg">宇宙勇面前，詹姆斯能否卫冕？</p>
        </div>
        <competition-nav :games="games" class="competition-nav"></competition-nav>
        <div class="new-list page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
          <new-item class="new-item page-infinite-listitem" v-for="newItem in newArr" :newItem="newItem"></new-item>
          <p v-show="loading" class="page-infinite-loading">
            <mt-spinner type="fading-circle"></mt-spinner>
          </p>
        </div>
      </mt-loadmore>
    </div>
</template>
<script>
import competitionNav from '../public/competitionNav'
import newItem from '../public/newItem'
export default {
  // 请求新闻数据
  mounted () {
    this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/recommend')
      .then((response) => {
        // console.log(response.data.newArr[0][0])
        this.newArr = response.data.newArr[0]
        this.games = response.data.games
        // console.log(this.newArr)
      })
      .catch((error) => {
        console.log(error) 
      })
  },
  data () {
    return {
      // 新闻数据
      newArr: [],
      games: [],
      // u请求url序号
      getNum: 0,
      imgUrl: 'http://xurenjie.cn:3000/img/img/James.jpeg',
      list: [],
      // 刷新圈
      loading: false,
      allLoaded: false,
      // 页面容器高度
      wrapperHeight: 1000
    }
  },
  components: {
    'competitionNav': competitionNav,
    'newItem': newItem
  },
  methods: {
    // 顶部下拉加载
    loadTop (id) {
      this.getNum++
      let oList = document.querySelector('.recommend')
      let oldHeight = oList.scrollHeight
      let that = this
      // this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/recommend'+this.getNum)
      this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/recommend1')
      .then((response) => {
        // console.log(response)
        // console.log(response.data.newArr[0][0])
        response.data.newArr[0].map(item => {
          this.newArr.unshift(item)
        })
        setTimeout(function () {
          let newHeight = oList.scrollHeight
          oList.scrollTop = newHeight - oldHeight
        }, 100)
        this.$refs.loadmore.onTopLoaded(id)
        // console.log(this.newArr)
      })
      .catch(function (error) {
        console.log(error) 
      })
    },
    handleTopChange () {

    },
    // initfined下拉刷新
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
.recommend
  width 100%
  height 20rem
  position relative
  overflow-y scroll
.mt-loadmore
  position absolute
  top 1.32667rem
  width 100%
  height 100%
  overflow-y scroll
.new-list
  position absolute
  width 100%
  top 9.7522222222rem
  padding-bottom 2rem
.competition-nav
  position absolute
  top 5.1022222222rem
  height 3.126666rem
  width 100%
.headline
  position absolute
  top 1.23666667rem
  height 5.126666rem
  width 100%
  background-size cover
  p
    color #fff
    position absolute
    bottom .3rem
    left .2rem
    font-weight 600
    font-size .47777rem
    text-overflow hidden
    white-space nowrap
</style>
