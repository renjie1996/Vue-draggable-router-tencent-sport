<template lang="html">
  <div class="tunnel__index">
    <slot></slot>
    <img :src="item.img">
    <p>{{item.name}}</p>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="stylus" scoped>
  .tunnel__index 
    width 3rem
    height 3rem
    background-color #ffffff
    text-align center
    img
      margin-top .366667rem
      width 2.4336667rem
      height 1.666667rem
    p
      margin-top 0.1226667rem
      font-size .36667rem
</style>
