import * as types from '../../types'

export const filter = ({ commit }, { challengeXp, environment, monsterType, maxPackSize, totalMonsters, query, multiplierShift }) => commit(types.MONSTERS_SET_FILTER, { challengeXp, environment, monsterType, maxPackSize, totalMonsters, query, multiplierShift })
