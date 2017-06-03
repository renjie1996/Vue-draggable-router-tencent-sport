<template lang="html">
  <div>
    <header class="header">
      <h3>全部比赛</h3>
      <p>{{month}}月{{day}}日</p>
    </header>
    <competition-nav class="competition-nav"></competition-nav>
  </div>
</template>
<script>
import competitionNav from '../public/competitionNav'
export default {
  created () {
    let oDate = new Date()
    this.month = oDate.getMonth() + 1
    this.day = oDate.getDate()
  },
  data () {
    return {
      month: 0,
      day: 0
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
  font-size .4rem
  width 100%
  text-align center
  top 1.4222222222rem
  font-weight 300
  opacity .6
  p
    font-size .2rem
.competition-nav
  position absolute
  top 2.8222222222rem
  height 3.126666rem
  width 100%
</style>
