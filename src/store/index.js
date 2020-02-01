import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import filters from './modules/filters'
import monsters from './modules/monsters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    filters,
    monsters
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
