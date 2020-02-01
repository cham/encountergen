import * as actions from './actions'
import mutations from './mutations'
import { monsters } from '../../../assets/json/monsters.json'

const monsterNames = Object.keys(monsters)
const monsterList = monsterNames.map((name) => ({
  name,
  ...monsters[name]
}))

const state = {
  monsterList,
  filteredMonsters: []
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
