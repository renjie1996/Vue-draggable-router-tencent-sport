<template lang="html">
  <div class="side-nav">
    <p class="item" v-for="navItem in navArr" 
       :data-url="navItem.url" @click="selecteItem">
       {{navItem.name}}
    </p>
  </div>
</template>
<script>
export default {
  mounted () {
    document.querySelectorAll('.item')[0].classList.add('selected')
  },
  methods: {
    // 显示不同的状态
    selecteItem () {
      let oUrl = event.currentTarget.dataset.url
      this.selected = oUrl
      if(document.querySelector('.selected'))  {
        document.querySelector('.selected').classList.remove('selected')
      }
      event.currentTarget.classList.add('selected')
      this.$emit('switchNav', oUrl)
    }
  },
  data () {
    return {
      selected: '',
      navArr: [{
        name: '推荐',
        url: 'recommend'
      }, {
        name: 'NBA社区',
        url: 'nba'
      }, {
        name: '篮球社区',
        url: 'basketball'
      },{
        name: '中国足球',
        url: 'chinafootball'
      },{
        name: '国际足球',
        url: 'interfootball'
      },{
        name: '综合体育',
        url: 'total'
      },{
        name: '电竞娱乐',
        url: 'game'
      },{
        name: '生活',
        url: 'life'
      },{
        name: '版务',
        url: 'things'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.side-nav
  width 2.6667rem
  height 14rem
  overflow-y scroll
  padding-bottom 1.66667rem
  .item
    padding .43333333rem .63333rem
    line-height 0.66667rem
    text-align center
    font-size .4867rem
    background-color #ecf0f4
    transition all .2s ease
  .selected
    background-color #fff
    color #3466f6
    transform scale(1.05)
</style>
