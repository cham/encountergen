import * as actions from './actions'
import mutations from './mutations'
import { environments } from '../../../assets/json/environments.json'
import { monsterTypes } from '../../../assets/json/monsterTypes.json'
import levelXpThreshold from '../../../assets/json/levelXpThreshold.json'

const state = {
  party: [
    {
      players: null,
      level: null,
      id: 1
    }
  ],
  totalPlayers: 0,
  challengeXp: {
    easy: 0,
    medium: 0,
    hard: 0,
    deadly: 0
  },
  multiplierShift: 0,
  levelXpThreshold,
  environments,
  monsterTypes
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
