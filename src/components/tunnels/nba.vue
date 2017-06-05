<template lang="html">
  <div>
    <competition-nav :games="games" class="competition-nav"></competition-nav>
  </div>
</template>
<script>
import competitionNav from '../public/competitionNav'
export default {
  components: {
    'competitionNav': competitionNav
  },
  mounted () {
    this.axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/recommend')
      .then((response) => {
        // console.log(response.data.newArr[0][0])
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
      games: []
    }
  },
}
</script>

<style lang="stylus" scoped>
.competition-nav
  position absolute
  top 1.4222222222rem
  height 3.126666rem
  width 100%
</style>
