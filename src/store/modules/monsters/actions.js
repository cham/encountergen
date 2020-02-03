import * as types from '../../types'

export const filter = ({ commit }, { environment, monsterType, query, challengeXp }) => commit(types.MONSTERS_SET_FILTER, { environment, monsterType, query, challengeXp })
