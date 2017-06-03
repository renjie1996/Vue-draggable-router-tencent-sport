import Vue from 'vue'
import Router from 'vue-router'
import Competition from '@/page/home/competition'
import Community from '@/page/home/community'
import Agenda from '@/page/home/agenda'
import Mine from '@/page/home/mine'
import Index from '@/page/index.vue'
import Article from '@/page/article/article'
import Recommend from '@/components/tunnels/recommend'
import Video from '@/components/tunnels/video'
import NBA from '@/components/tunnels/nba'
import Hotpost from '@/components/community/hotpost'
import Mycircle from '@/components/community/mycircle'
import Activies from '@/components/community/activies'
import CommunityAll from '@/components/community/all'
import Focus from '@/components/agenda/focus'
import AgendaAll from '@/components/agenda/all'
import Popular from '@/components/agenda/popular'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/article',
      component: Article
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/competition/recommend',
      children: [{
        path: '/competition',
        name: 'competition',
        component: Competition,
        children: [{
          path: '/competition/recommend',
          name: 'recommend',
          component: Recommend
        }, {
          path: '/competition/video',
          name: 'video',
          component: Video
        }, {
          path: '/competition/nba',
          name: 'nba',
          component: NBA
        }]
      }, {
        path: '/community',
        name: 'community',
        component: Community,
        children: [{
          path: '/community/hotpost',
          name: 'hotpost',
          component: Hotpost
        }, {
          path: '/community/mycircle',
          name: 'mycircle',
          component: Mycircle
        }, {
          path: '/community/activies',
          name: 'activies',
          component: Activies
        }, {
          path: '/community/all',
          name: 'communityall',
          component: CommunityAll
        }]
      }, {
        path: '/agenda',
        name: 'agenda',
        component: Agenda,
        children: [{
          path: '/agenda/focus',
          name: 'focus',
          component: Focus
        }, {
          path: '/agenda/all',
          name: 'agendaall',
          component: AgendaAll
        }, {
          path: '/agenda/popular',
          name: 'popular',
          component: Popular
        }]
      }, {
        path: '/mine',
        name: 'Mine',
        component: Mine}
      ]
    }
  ]
})
