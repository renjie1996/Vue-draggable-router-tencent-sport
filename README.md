# Vue-draggable模拟腾讯体育拖拽
>一年一度的NBA总决赛，相信球迷用的最多的就是腾讯体育这款APP，刚好上手Vue，当练手就把这个APP仿下来。

## 效果预览

>### 👉在线预览：[点我！！！在线预览，手机浏览或切换浏览器移动调试](http://xurenjie.cn:3000/vue-tencent-sports/index.html)

>### 👉源码地址：[Github](https://github.com/renjie1996/tencent-sports)✨✨求你的小星星～

# 描述
前端部分
* SPA单页应用，前后端分离，webpack build to dist
* 移动设备兼容：使用flexible.js和rem处理兼容问题
* 路由懒加载：Vue Router 处理路由，结合 Vue 的 异步组件 和 Webpack 的 code splitting feature 实现路由懒加载
* axios做ajax请求
* 使用了 Vuex 管理组件间的状态，实现非父子组件之间的通信
* 使用 Vue-draggable实现移动端拖拽排序
* mint-UI完成构建图片懒加载、下拉刷新、infinite-scroll等组件
* 大图片、轮播图通过 sessionStorage 存储


后端部分
* mock模拟数据
* express 做静态资源目录

待更新的功能
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

```
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


## 使用

```
 npm install
```

```
 npm run dev
 
```

## 我的简历

[感兴趣请点我](http://xurenjie.cn:3000/resume/xurenjie_resume.html)



