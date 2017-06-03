<template lang="html">
  <router-link :to="newItem.url">
    <div class="newItem">
      <div class="item-left">
        <p class="item__title">{{newItem.title}}</p>
        <p class="item__index">
          <span class="date">{{newItem.date}}</span>
          <span class="author">{{newItem.author}}</span>
          <span class="commet-num">{{newItem.commetNum}}评</span>
        </p>
      </div>
      <div class="item-right">
        <img src="http://xurenjie.cn:3000/img/img/new1.jpg" alt="">
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ['newItem']
  // created () {
  //   setTimeout(() => {
  //     console.log(this.newItem)
  //   }, 2000)
  // }
}
</script>

<style lang="stylus" scoped>
.newItem
  background-color #fff
  display flex
  flex-direction row
  height 3rem
  position relative
  .item-left
    flex 2
    .item__title
      margin .3rem
      color #333
      font-size .4266667rem
      font-weight 500
    .item__index
      margin-top .56667rem
      margin-left .3rem
      color #828597
      .date
        margin-right .233333rem
      .author
        margin-right 1.866667rem
  .item-right 
    flex 1
    text-align right
    img
      margin-top .3833333rem
      margin-right .3833333rem
      height 2.266667rem
      width 2.6666667rem
  &:after
    content ''
    position absolute
    top 3rem
    z-index 2
    height 1px
    width 100%
    background-color #ddd
    transform scale(.9,.5)
</style>
