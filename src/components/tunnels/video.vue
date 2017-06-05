<template lang="html">
  <div class="video">
    <mt-loadmore
      class="mt-loadmore"
      top-pull-text="加载更多"
      top-drop-text="释放加载"
      ref="loadmore"
      @top-status-change="handleTopChange"
      :top-method="loadTop">
        <div class="new-list page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
          <video-card v-for="videoItem in videoArr" :videoItem="videoItem" class="video-card page-infinite-listitem"></video-card>
          <p v-show="loading" class="page-infinite-loading">
            <mt-spinner type="fading-circle"></mt-spinner>
          </p>
        </div>
      </mt-loadmore>
  </div>
</template>
<script>
import videoCard from '../public/videoCard'
export default {
  mounted () {
    // https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/video-tunnel/1
    this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/video-tunnel/1')
      .then((response) => {
        // console.log(response.data)
        this.videoArr.push(response.data)
      })
      .catch((error) => {
        console.log(error) 
      })
  },
  data () {
    return {
      videoArr: [],
      // u请求url序号
      getNum: 1,
      // 刷新圈
      loading: false,
      allLoaded: false,
      // 页面容器高度
      wrapperHeight: 1000
    }
  },
  components: {
    'videoCard': videoCard
  },
  methods: {
    // 顶部下拉加载
    loadTop (id) {
      this.getNum++
      let oList = document.querySelector('.mt-loadmore')
      let oldHeight = oList.scrollHeight
      let that = this
      // this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/recommend'+this.getNum)
      this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/video-tunnel/2')
      .then((response) => {
        // console.log(response)
        // console.log(response.data.newArr[0][0])
        this.videoArr.push(response.data)
        setTimeout(function () {
          let newHeight = oList.scrollHeight
          oList.scrollTop = newHeight - oldHeight
        }, 100)
        this.$refs.loadmore.onTopLoaded(id)
        // console.log(this.videoArr)
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
      this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/video-tunnel/2')
      .then((response) => {
        // console.log(response)
        // console.log(response.data.newArr[0][0])
        this.videoArr.push(response.data)
        this.loading = false
        // console.log(this.videoArr)
      })
      .catch(function (error) {
        console.log(error) 
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.video
  position absolute
  top 1.5666667rem
  width 100%
  overflow-y scroll
  padding-bottom 2rem
  .video-card
    background-color #fff
    margin-top .2rem
</style>
