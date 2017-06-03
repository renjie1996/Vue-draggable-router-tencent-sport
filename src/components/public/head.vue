<template lang="html">
  <div class="head">
    <div class="head__tunnels">
      <router-link v-for="route in routes[pageIndex-1]" :to="route.url" class="head__tunnel">
        {{route.name}}
      </router-link>
    </div>
    <div v-if="pageIndex === 1" class="head__add" @click="popupMask">+</div>
  </div>
</template>
<script>
export default {
  props: ['pageIndex', 'routes'],
  methods: {
    popupMask () {
      this.$emit('popupMask')
    }
  }
}
</script>

<style lang="stylus" scoped>
.head
  position fixed
  top 0
  z-index 99
  height 1.32666667rem
  line-height 1.32666667rem
  background-color #3466f6
  display flex
  width 100%
  .head__add
    text-align center
    flex 2 
    color #fff
    font-size .76667rem
    font-weight 300
  .head__tunnels
    flex 9
    overflow-x scroll
    overflow-y hidden
    text-align center
    white-space nowrap
    .head__tunnel
      display inline
      padding 0 .206667rem 0 .406667rem
      font-size .4666667rem
      color #aabefa
    .router-link-active 
      color #fff
    
    
</style>
