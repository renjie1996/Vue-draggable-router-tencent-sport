import * as types from './mutation_types'

export default {
  // 添加社团
  [types.ADD_CLUB] (state, obj) {
    if(!state.clubs.includes(obj)) state.clubs.push(obj)
    return
  },
  // 删除社团
  [types.DELETE_CLUB] (state, obj) {
    let oIndex = state.clubs.findIndex((item) => {
      return item.name == obj.name
    })
    state.clubs.splice(oIndex, 1)
  },
  // 添加未订阅
  [types.ADD_NOSUBSCRIBED] (state, index) {
    console.log(index)
  },
  // 删除未订阅
  [types.DELETE_NOSUBSCRIBED] (state, index) {
    console.log(index)
  },
  // 添加订阅
  [types.ADD_SUBSCRIBED] (state, index) {
    console.log(index)
    let temp = state.noSubscribed[index]
    state.noSubscribed.splice(index, 1)
    state.subscribed.push(temp)
    state.routes[0].push(temp)
  },
   // 删除订阅
  [types.DELETE_SUBSCRIBED] (state, index) {
    // console.log(index)
    let oIndex = parseInt(index) + 2
    let temp = state.subscribed[index]
    state.subscribed.splice(index, 1)
    state.routes[0].splice(oIndex, 1)
    // console.log(state.noSubscribed)
    state.noSubscribed.push(temp)
  },
  // 用数据块更新
  [types.UPDATE_ALL] (state, obj) {
    // console.log(obj)
    // console.log(obj.temp_NoSubscribedArr)
    // console.log(obj.temp_subscribedArr)
    state.subscribed = obj.temp_subscribedArr
    state.noSubscribed = obj.temp_NoSubscribedArr
    // console.log(state.subscribed)
    // console.log(state.noSubscribed)
    state.routes[0] = [{
      name: '推荐',
      url: '/competition/recommend'
    }, {
      name: '视频',
      url: '/competition/video'
    }]
    // console.log(state.subscribed)
    state.subscribed.map(item => {
      // console.log(item)
      // console.log(state.routes[0])
      state.routes[0].push(item)
    })
    // console.log(state.routes[0])
  }
}
