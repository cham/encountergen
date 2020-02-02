import * as types from '../../types'

const calculateChallengeXp = (party, thresholds) => {
  return party.reduce((memo, partyItem) => {
    if (!partyItem.level) {
      return memo
    }
    memo.easy += thresholds[partyItem.level].easy * partyItem.players
    memo.medium += thresholds[partyItem.level].medium * partyItem.players
    memo.hard += thresholds[partyItem.level].hard * partyItem.players
    memo.deadly += thresholds[partyItem.level].deadly * partyItem.players
    memo.maximum += thresholds[partyItem.level].maximum * partyItem.players
    return memo
  }, { easy: 0, medium: 0, hard: 0, deadly: 0, maximum: 0 })
}

const calculateTotalPlayers = party => party.reduce((memo, partyItem) => memo + partyItem.players, 0)

const calculateMultiplierShift = totalPlayers => totalPlayers < 3 ? 1 : (totalPlayers > 5 ? -1 : 0)

const updateParty = (state, party) => {
  const challengeXp = calculateChallengeXp(party, state.levelXpThreshold)
  const totalPlayers = calculateTotalPlayers(party)
  const multiplierShift = calculateMultiplierShift(totalPlayers)
  state = Object.assign(state, { party, challengeXp, totalPlayers, multiplierShift })
}

export default {
  [types.FILTERS_SET_PARTY_ITEM] (state, { id, players, level }) {
    const party = state.party
    party.forEach((partyItem) => {
      if (partyItem.id === id) {
        partyItem.players = players
        partyItem.level = level
      }
    })
    updateParty(state, party)
  },
  [types.FILTERS_ADD_PARTY_ITEM] (state) {
    const maxId = state.party.reduce((memo, partyItem) => {
      return Math.max(memo, partyItem.id)
    }, -Infinity)
    const party = state.party
    party.push({ id: maxId + 1, players: null, level: null })
    state = Object.assign(state, { party })
  },
  [types.FILTERS_DELETE_PARTY_ITEM] (state, { id }) {
    let party = state.party
    party = party.filter(p => p.id !== id)
    updateParty(state, party)
  },
  [types.FILTERS_SET_ENVIRONMENT] (state, { environment }) {
    state = Object.assign(state, { environment })
  },
  [types.FILTERS_SET_MONSTER_TYPE] (state, { monsterType }) {
    state = Object.assign(state, { monsterType })
  },
  [types.FILTERS_SET_SETTINGS] (state , { maxPackSize, totalMonsters }) {
    state = Object.assign(state, { maxPackSize, totalMonsters })
  },
  [types.FILTERS_SET_SEARCH] (state, { query }) {
    state = Object.assign(state, { query })
  }
}
