<template lang="html">
  <div class="mycircle">
    <div class="circle-content">
      <header class="header">
        已关注的圈子
      </header>
      <div class="circles">
        <router-link to="/community/all" class="circles-left">+</router-link>
        <ul class="circles-right">
          <li class="circle__item" v-for="club in clubsArr">
            <img :src="club.img" alt="">
            <p>{{club.name}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="circle-article">
      <div class="article-list page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
        <community-article v-for="article in articleArr" :article="article" class="community-article page-infinite-listitem"></community-article>
        <p v-show="loading" class="page-infinite-loading">
          <mt-spinner type="fading-circle"></mt-spinner>
          加载中
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import communityArticle from '../public/communityArticle'
export default {
  mounted () {
    this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/swiper')
      .then((response) => {
        // console.log(response.data.swiper)
        this.swiperItems = response.data.swiper
      })
      .catch(function (error) {
        console.log(error) 
      })
      this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/article')
      .then((response) => {
        this.articleArr = response.data.articles
      })
      .catch(function (error) {
        console.log(error) 
      })
  },
  data () {
    return {
      clubsArr: this.$store.state.clubs,
      swiperItems: [],
      articleArr: [],
      list: [],
      loading: false,
      allLoaded: false,
      wrapperHeight: 1000
    }
  },
  methods: {
    // 加载更多
    loadMore() {
      this.loading = true
      this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/article1')
      .then((response) => {
        response.data.articles.map(item => {
          this.articleArr.push(item)
          this.loading = false
        })
      })
      .catch(function (error) {
        console.log(error) 
      })
    }
  },
  components: {
    communityArticle
  }
}
</script>

<style lang="stylus" scoped>
  .mycircle
    position absolute
    top 1.2667rem
    width 100%
    background-color #fff
    overflow-x hidden
    .circle-content
      position relative
      width 100%
      .header
        font-size .506666rem
        padding .2rem
        font-weight 400
      .circles
        margin-top .1rem
        width 100%
        display flex
        padding-bottom .2rem
        .circles-left
          height 1.2rem
          width 1.2rem
          text-align center
          margin-left .3rem
          margin-right .7rem
          font-size .888888rem
          color #cfcfcf
          border-radius 999px
          background-color #f0f0f0
        .circles-right
          white-space nowrap
          overflow-x scroll
          width 12rem
          flex 1
          .circle__item
            display inline-block
            white-space nowrap
            overflow-x scroll
            margin-right .7rem
            img
              width 1.2rem
              height 1.2rem
              border-radius 999px
            p
              font-size .2rem
              color #333
              text-align center
          &:after
            content: ''
            display table
            visibility hidden
            clear both
</style>
