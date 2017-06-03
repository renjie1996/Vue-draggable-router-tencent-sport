<template>
  <div>
    <v-header :pageIndex="pageIndex" v-on:popupMask="switchMask1" :routes="routes"></v-header>
    <router-view></router-view>
    <tabbar v-on:switchNav="switchNum"></tabbar>
    <v-popup :popupVisible="popupVisible" v-on:switchMask="switchMask"></v-popup> 
  </div>
</template>

<script>
import Tabbar from '../components/public/tabbar'
import vHeader from '../components/public/head'
import vPopup from '../components/tunnels/popup'
export default {
  data () {
    return {
      popupVisible: false,
      pageIndex: 1,
      routes: []
    }
  },
  // 路由名用于渲染页面head的nav
  mounted () {
    this.routes = this.$store.getters.getRoutes
  },
  components: {
    'tabbar': Tabbar,
    'vHeader': vHeader,
    'vPopup': vPopup
  },
  methods: {
    // 传给头部渲染
    switchNum (value) {
      // console.log(value)
      this.pageIndex = value
    },
    // 切换弹出抽屉
    switchMask (arr) {
      this.routes = arr
      this.popupVisible = !this.popupVisible
    },
    // 头部弹出抽屉事件
    switchMask1 (arr) {
      this.routes = arr || []
      this.popupVisible = !this.popupVisible
    }
  }
}
</script>

<style lang="stylus">     
</style>
