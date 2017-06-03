<template lang="html">
  <mt-popup v-model="popupVisible" position="right" class="mint-popup" :modal="false">
    <div class="tunnels">
      <header>
        <div class="back" @click="switchMask"></div>
        <p>频道定制</p>
      </header>
      <div class="content">
        <div class="subscribed">
          <div class="subscribed__header">
            <p class="title">已定制</p>
            <p class="desc">按住可以拖动排序</p>
          </div>
          <draggable v-model="subscribedArr" :move="onMove" :options="dragOptions" @start="isDragging=true" @end="isDragging=false">
            <transition-group>
              <tunnel-index class="tunnel-index"
                @click=" element.fixed=! element.fixed" aria-hidden="true" 
                v-for="(item,index) in subscribedArr"
                :key="index"
                :item="item"
                :data-index="index" @click.native="deleteTunnel">
              </tunnel-index>
            </transition-group>
          </draggable>
        </div>
        <div class="no-subscribed">
           <div class="subscribed__header">
            <p class="title">未定制</p>
          </div>
          <draggable v-model="noSubscribedArr" :move="onMove" :options="dragOptions" @start="isDragging=true" @end="isDragging=false">
            <transition-group>
              <tunnel-index class="tunnel-index"
                @click=" element.fixed=! element.fixed" aria-hidden="true"
                v-for="(item,index) in noSubscribedArr"
                :key="index"
                :item="item"
                :data-index="index" @click.native="addTunnel">
                <p class="tunnel__add">+</p>
              </tunnel-index>
             </transition-group>
          </draggable>
        </div>
      </div>
    </div>
  </mt-popup>
</template>

<script>
import tunnelIndex from '../public/tunnelIndex'
import draggable from 'vuedraggable'

export default {
  mounted () {
    // 取出store数据
    this.subscribedArr = this.$store.state.subscribed
    this.noSubscribedArr = this.$store.state.noSubscribed   
  },
  props: ['popupVisible'],
  data () {
    return {
      // 订阅
      subscribedArr: [],
      // 未订阅
      noSubscribedArr: [],
      isDragging: false,
      delayedDragging: false,
      editable: true
    }
  },
  methods: {
    // 向父组件传回
    switchMask () {
      let oRoute = this.$store.getters.getRoutes
      // console.log(oRoute)
      this.$emit('switchMask', oRoute)
    },
    // 添加订阅频道
    addTunnel () {
      // console.log(event.currentTarget.dataset.index)
      let index = event.currentTarget.dataset.index
      this.$store.dispatch('add_subscribed', index)
      // console.log(this.subscribedArr)
      this.subscribedArr = this.$store.state.subscribed
    },
    // 删除订阅频道
    deleteTunnel () {
      let index = event.currentTarget.dataset.index
      this.$store.dispatch('delete_subscribed', index)
    },
    // api 控制元素
    onMove ({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      // 进入下一个拖拽区域
      this.$nextTick(() => {
        this.delayedDragging = false
        // console.log(this.subscribedArr)
        // console.log(this.noSubscribedArr)

        // 刷新store
        let temp_subscribedArr = this.subscribedArr
        let temp_NoSubscribedArr = this.noSubscribedArr
        this.$store.dispatch('update_all', { temp_subscribedArr, temp_NoSubscribedArr })
      })
      // let temp_subscribedArr = this.subscribedArr
      // let temp_noSubscribedArr = this.noSubscribedArr
      // this.$store.dispatch('update_all', { temp_subscribedArr, temp_noSubscribedArr })
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    }
  },
  components: {
    tunnelIndex,
    draggable
  }
}
</script>

<style lang="stylus" scoped>
.mint-popup 
  width 100%
  height 100%
  background-color #fff
  .tunnels
    header
      position fixed
      top -1px
      height 1.32666667rem
      line-height 1.32666667rem
      background-color #3466f6
      width 100%
      text-align center
      z-index 99
      p 
        color #fff
        font-size .4666667rem
      .back
        position absolute
        height .32666667rem
        width .32666667rem
        border-bottom 1px solid #fff
        border-left 1px solid #fff
        transform rotate(45deg)
        top .4666667rem
        left .6666666rem
    .content
      overflow-y scroll 
      padding-top 1.66667rem
      background-color #e9e9e9
      height 100vh
      .no-subscribed
        padding-bottom 5rem
      .subscribed
      .no-subscribed
        margin-bottom .16666666rem
        &:after
          content ''
          display table
          visibility hidden
          clear both
        .tunnel-index
          position relative
          float left
          margin .13333rem
          .tunnel__add
            position absolute
            color #3466f6
            top 0rem
            right 0rem
            margin .0666777rem .0666777rem
            line-height .4rem
            font-size .666667rem
            font-weight 300
        .subscribed__header
          height .666667rem
          line-height .666667rem
          color #333
          .title
            float left
            font-size .366667rem
            margin-left .13333rem
          .desc
            float right
            font-size .2rem
            opacity .6
            margin-right .13333rem
          &:after
            content ''
            display table
            visibility hidden
            clear both
</style>

