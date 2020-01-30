import * as types from '../../types'

export const setPartyItem = ({ commit }, { id, players, level }) => commit(types.FILTERS_SET_PARTY_ITEM, { id, players, level })

export const addPartyItem = ({ commit }) => commit(types.FILTERS_ADD_PARTY_ITEM)
