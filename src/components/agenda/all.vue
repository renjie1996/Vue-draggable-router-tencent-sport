<template lang="html">
  <div>
    <header class="header">
      <h3>全部比赛</h3>
      <p>{{month}}月{{day}}日</p>
    </header>
    <competition-nav :games="games" class="competition-nav"></competition-nav>
  </div>
</template>
<script>
import competitionNav from '../public/competitionNav'
export default {
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
  created () {
    let oDate = new Date()
    this.month = oDate.getMonth() + 1
    this.day = oDate.getDate()
  },
  data () {
    return {
      month: 0,
      day: 0,
      games: []
    }
  },
  components: {
    'competitionNav': competitionNav
  }
}
</script>

<style lang="stylus" scoped>
.header
  position absolute
  font-size .3rem
  color #333
  width 100%
  text-align center
  top 1.4222222222rem
  font-weight 200
  opacity .6
  p
    font-size .2rem
.competition-nav
  position absolute
  top 2.6222222222rem
  height 3.126666rem
  width 100%
</style>
