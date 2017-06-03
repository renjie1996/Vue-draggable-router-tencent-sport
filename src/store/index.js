import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex) // this.$store对象

const state = {
// 社团
  clubs:[
    
  ],
// 路由结构
  routes: [[{
    name: '推荐',
    url: '/competition/recommend'
  }, {
    name: '视频',
    url: '/competition/video'
  }], [{
    name: '热帖',
    url: '/community/hotpost'
  }, {
    name: '我的圈子',
    url: '/community/mycircle'
  }, {
    name: '活动',
    url: '/community/activies'
  }, {
    name: '全部',
    url: '/community/all'
  }], [
    {
      name: '关注',
      url: '/agenda/focus'
    }, {
      name: '全部',
      url: '/agenda/all'
    }, {
      name: '热门',
      url: '/agenda/popular'
    }
  ]],
  // 订阅
  subscribed: [],
  // 还未订阅的
  noSubscribed: [{
    name: 'NBA',
    url: '/competition/nba',
    img: 'http://xurenjie.cn:3000/img/tunnels/nba.png'
  }, {
    name: 'CBA',
    url: '/competition/cba',
    img: 'http://xurenjie.cn:3000/img/tunnels/cba.png'
  }, {
    name: 'NCAA',
    url: '/competition/ncaa',
    img: 'http://xurenjie.cn:3000/img/tunnels/ncaa.png'
  }, {
    name: 'NFL',
    url: '/competition/nfl',
    img: 'http://xurenjie.cn:3000/img/tunnels/nfl.png'
  }, {
    name: '中超',
    url: '/competition/csl',
    img: 'http://xurenjie.cn:3000/img/tunnels/中超.png'
  }, {
    name: '法网',
    url: '/competition/prg',
    img: 'http://xurenjie.cn:3000/img/tunnels/法网.png'
  }, {
    name: '西甲',
    url: '/competition/lfp',
    img: 'http://xurenjie.cn:3000/img/tunnels/西甲.png'
  }, {
    name: '欧冠',
    url: '/competition/ofc',
    img: 'http://xurenjie.cn:3000/img/tunnels/欧冠.png'
  }, {
    name: '英超',
    url: '/competition/esl',
    img: 'http://xurenjie.cn:3000/img/tunnels/英超.png'
  }, {
    name: '亚冠',
    url: '/competition/afc',
    img: 'http://xurenjie.cn:3000/img/tunnels/亚冠.png'
  }, {
    name: '综合',
    url: '/competition/total',
    img: 'http://xurenjie.cn:3000/img/tunnels/综合.png'
  }]
}

export default new Vuex.Store({
  state, // 状态 存放
  mutations, // 修改、改变、切换、下一个改变的定义
  getters,
  actions // 动作，组件不能直接改变state，改变谁？
})
