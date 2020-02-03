import * as types from '../../types'

export const filter = ({ commit }, { totalPlayers, challengeXp, environment, monsterType, maxPackSize, totalMonsters, query, multiplierShift }) => commit(types.MONSTERS_SET_FILTER, { totalPlayers, challengeXp, environment, monsterType, maxPackSize, totalMonsters, query, multiplierShift })
