import * as types from '../../types'

export const setPartyItem = ({ commit, state, dispatch }, { id, players, level }) => {
  commit(types.FILTERS_SET_PARTY_ITEM, { id, players, level })
  dispatch('monsters/filter', state, { root: true })
}

export const addPartyItem = ({ commit, state, dispatch }) => {
  commit(types.FILTERS_ADD_PARTY_ITEM)
  dispatch('monsters/filter', state, { root: true })
}

export const deletePartyItem = ({ commit, state, dispatch }, { id }) => {
  commit(types.FILTERS_DELETE_PARTY_ITEM, { id })
  dispatch('monsters/filter', state, { root: true })
}

export const setEnvironment = ({ commit, state, dispatch }, { environment }) => {
  commit(types.FILTERS_SET_ENVIRONMENT, { environment })
  dispatch('monsters/filter', state, { root: true })
}

export const setMonsterType = ({ commit, state, dispatch }, { monsterType }) => {
  commit(types.FILTERS_SET_MONSTER_TYPE, { monsterType })
  dispatch('monsters/filter', state, { root: true })
}

export const setSettings = ({ commit, state, dispatch }, { maxPackSize, totalMonsters }) => {
  commit(types.FILTERS_SET_SETTINGS, { maxPackSize, totalMonsters })
  dispatch('monsters/filter', state, { root: true })
}
export const setSearch = ({ commit, state, dispatch }, { query }) => {
  commit(types.FILTERS_SET_SEARCH, { query })
  dispatch('monsters/filter', state, { root: true })
}
