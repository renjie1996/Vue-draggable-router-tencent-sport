import * as types from './mutation_types'
export default {
  // 未定制增加
  add_nosubscribed: ({ commit }, index) => {
    commit(types.ADD_NOSUBSCRIBED, index)
  },
  // 未定制减少
  delete_nosubscribed: ({ commit }, index) => {
    commit(types.DELETE_NOSUBSCRIBED, index)
  },
  // 定制增加
  add_subscribed: ({ commit }, index) => {
    commit(types.ADD_SUBSCRIBED, index)
  },
  // 定制减少
  delete_subscribed: ({ commit }, index) => {
    commit(types.DELETE_SUBSCRIBED, index)
  },
  // 更新页面和数据
  update_all: ({ commit }, obj) => {
    commit(types.UPDATE_ALL, obj)
  },
  // 社团增加
  add_club: ({ commit }, obj) => {
    commit(types.ADD_CLUB, obj)
  },
  // 社团减少
  delete_club: ({ commit }, obj) => {
    commit(types.DELETE_CLUB, obj)
  },
}
