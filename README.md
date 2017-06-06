# Vue2.0全家桶仿腾讯体育APP
>一年一度的NBA总决赛，相信球迷用的最多的就是腾讯体育这款APP，刚好上手Vue，当练手就把这个APP仿下来。

![](https://dn-mhke0kuv.qbox.me/4e7ea79ba9fa8ad286e1.gif)
## 效果预览

>### 👉在线预览：[点我！！！在线预览，手机浏览或切换浏览器移动调试](http://xurenjie.cn:3000/vue-tencent-sports/index.html)

>### 👉源码地址：[Github](https://github.com/renjie1996/tencent-sports)✨✨求你的小星星～

![](https://dn-mhke0kuv.qbox.me/cfe5be12a6941859d059.gif)

# 描述
>前端部分
* SPA单页应用，前后端分离，webpack build to dist
* 移动设备兼容：使用flexible.js和rem处理兼容问题
* 路由懒加载：Vue Router 处理路由，结合 Vue 的 异步组件 和 Webpack 的 code splitting feature 实现路由懒加载
* axios做ajax请求
* 使用了 Vuex 管理组件间的状态，实现非父子组件之间的通信
* 使用 Vue-draggable实现移动端拖拽排序
* mint-UI完成构建图片懒加载、下拉刷新、infinite-scroll等组件
* 大图片、轮播图通过 sessionStorage 存储


>后端部分
* mock模拟数据
* express 做静态资源目录

>待更新的功能
* 处理数据相关性，让圈子组件和文章组件对应显示
* 改用 express 抛接口
* 用 express + mongodb 保存用户状态


# 具体功能实现
## 路由结构
使用了Vue的异步组件和Webpack的code splitting feature实现路由组件的懒加载当打包构建应用时，Javascript包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。这样刚进去的时候页面加载时间明显减短。
```
routes: [
    {
      path: '/article-video/:id',
      component: resolve => require(['@/page/article/article-video'], resolve)
    },
    {
      path: '/article/:id',
      component: resolve => require(['@/page/article/article'], resolve)
    },
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/page/index.vue'], resolve),
      redirect: '/competition/recommend',
      children: [{
        path: '/competition',
        name: 'competition',
        component: resolve => require(['@/page/home/competition'], resolve),
        children: [{
          path: '/competition/recommend',
          name: 'recommend',
          component: resolve => require(['@/components/tunnels/recommend'], resolve)
        }, {
          path: '/competition/video',
          name: 'video',
          component: resolve => require(['@/components/tunnels/video'], resolve)
        }, {
          path: '/competition/nba',
          name: 'nba',
          component: resolve => require(['@/components/tunnels/nba'], resolve),
        }]
      }, {
        path: '/community',
        name: 'community',
        component: resolve => require(['@/page/home/community'], resolve),
        children: [{
          path: '/community/hotpost',
          name: 'hotpost',
          component: resolve => require(['@/components/community/hotpost'], resolve)
        }, {
          path: '/community/mycircle',
          name: 'mycircle',
          component: resolve => require(['@/components/community/mycircle'], resolve)
        }, {
          path: '/community/activies',
          name: 'activies',
          component: resolve => require(['@/components/community/activies'], resolve)
        }, {
          path: '/community/all',
          name: 'communityall',
          component: resolve => require(['@/components/community/all'], resolve)
        }, {
          path: '/community/article/:id',
          component: resolve => require(['@/page/article/article'], resolve),
          redirect: '/article/:id'
        }]
      }, {
        path: '/agenda',
        name: 'agenda',
        component: resolve => require(['@/page/home/agenda'], resolve),
        children: [{
          path: '/agenda/focus',
          name: 'focus',
          component: resolve => require(['@/components/agenda/focus'], resolve)
        }, {
          path: '/agenda/all',
          name: 'agendaall',
          component: resolve => require(['@/components/agenda/all'], resolve)
        }, {
          path: '/agenda/popular',
          name: 'popular',
          component: resolve => require(['@/components/agenda/popular'], resolve)
        }]
      }, {
        path: '/mine',
        name: 'Mine',
        component: resolve => require(['@/page/home/mine'], resolve),
        redirect: '/mine/index',
        children: [{
          path: '/mine/index',
          component: resolve => require(['@/components/mine/index'], resolve)
        }]
      }]
    }
  ]
```
## 拖拽排序
众所皆知，h5原生的drag事件对移动端是无效的，因此，移动端的拖拽实现，依赖于touchstart、touchend和scroll的坐标计算，实现起来非常麻烦，Vue-draggable可以让我们轻松实现跟PC端效果一样的拖拽排序。

>👉文档地址：https://github.com/SortableJS/Vue.Draggable

>特性Full support of Sortable.js features:
Supports touch devices
Supports drag handles and selectable text
Smart auto-scrolling
Support drag and drop between different lists
No jQuery dependency
Keeps in sync HTML and view model list
Compatible with Vue.js 2.0 transition-group
Cancellation support
Events reporting any changes when full control is needed

![](https://dn-mhke0kuv.qbox.me/4e7ea79ba9fa8ad286e1.gif)
安装依赖
>```
npm install vuedraggable --save
```

构造拖拽区域
```
<draggable v-model="subscribedArr" :move="onMove" :options="dragOptions"@start="isDragging=true" @end="isDragging=false">
    <transition-group>
    </transition-group>
</draggable>
```

## Vuex的使用

需要注意：Action 类似于 mutation，不同在于：
* Action 提交的是 mutation，而不是直接变更状态。
* Action 可以包含任意异步操作。


### 用到的地方

*  频道订阅的状态改变对应路由的变化

![](https://dn-mhke0kuv.qbox.me/95c8e5dfb669a2b897ab.png)

*  圈子订阅的状态改变对应订阅列表的双向显示

![](https://dn-mhke0kuv.qbox.me/a397aa339c371fd1041b.png)

### mutation-types
```
// 未定制增加
export const ADD_NOSUBSCRIBED = 'ADD_NOSUBSCRIBED'
// 未定制减少
export const DELETE_NOSUBSCRIBED = 'DELETE_NOSUBSCRIBED'
// 定制增加
export const ADD_SUBSCRIBED = 'ADD_SUBSCRIBED'
// 定制减少
export const DELETE_SUBSCRIBED = 'DELETE_SUBSCRIBED'
// 更新页面和数据
export const UPDATE_ALL = 'UPDATE_ALL'
// 社团增加
export const ADD_CLUB = 'ADD_CLUB'
// 社团减少
export const DELETE_CLUB = 'DELETE_CLUB'

```

### mutations
```
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
```
### actions
```
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

```

###  做个小广告
###  👉 小前端求实习：[我的简历](http://xurenjie.cn:3000/resume/xurenjie_resume.html)








