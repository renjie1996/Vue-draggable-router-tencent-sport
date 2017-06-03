<template lang="html">
  <div class="hotpost">
    <div class="article-list page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
      <community-article v-for="article in articleArr" :article="article" class="community-article page-infinite-listitem"></community-article>
      <p v-show="loading" class="page-infinite-loading">
        <mt-spinner type="fading-circle"></mt-spinner>
        加载中
      </p>
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
.page-infinite-loading
  position absolute
  bottom 1.4rem
  margin-left 4.6rem
.hotpost
   padding-bottom 3rem
.article-list
  position absolute
  top 1.2888888rem
  padding-bottom 3rem  
</style>
