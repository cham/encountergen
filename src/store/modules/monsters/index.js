import * as actions from './actions'
import mutations from './mutations'
import { monsters } from '../../../assets/json/monsters.json'
import { monsterDetails } from '../../../assets/json/monster_details.json'

const monsterNames = Object.keys(monsters)
const monsterList = monsterNames.map((name) => ({
  name,
  ...monsterDetails.find(md => md.name === name),
  ...monsters[name]
}))

const state = {
  monsterList,
  filteredMonsters: [],
  encounterGroups: []
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
