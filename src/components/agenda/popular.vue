<template lang="html">
  <div>
    <competition-nav class="competition-nav"></competition-nav>
  </div>
</template>
<script>
import competitionNav from '../public/competitionNav'
export default {
  components: {
    'competitionNav': competitionNav
  }
}
</script>

<style lang="stylus" scoped>
.competition-nav
  position absolute
  top 1.4222222222rem
  height 3.126666rem
  width 100%
</style>
