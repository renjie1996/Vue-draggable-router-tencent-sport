import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
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
})
// import Competition from '@/page/home/competition'
// import Community from '@/page/home/community'
// import Agenda from '@/page/home/agenda'
// import Mine from '@/page/home/mine'
// import Index from '@/page/index.vue'
// import Article from '@/page/article/article'
// import ArticleVideo from '@/page/article/article-video'
// import Recommend from '@/components/tunnels/recommend'
// import Video from '@/components/tunnels/video'
// import NBA from '@/components/tunnels/nba'
// import Hotpost from '@/components/community/hotpost'
// import Mycircle from '@/components/community/mycircle'
// import Activies from '@/components/community/activies'
// import CommunityAll from '@/components/community/all'
// import Focus from '@/components/agenda/focus'
// import AgendaAll from '@/components/agenda/all'
// import Popular from '@/components/agenda/popular'
// import MineIndex from '@/components/mine/index'
