import Vue from 'vue'
import Router from 'vue-router'

import BattleGenerator from '@/components/pages/BattleGenerator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BattleGenerator',
      component: BattleGenerator
    }
  ]
})
