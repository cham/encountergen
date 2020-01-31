import * as types from '../../types'

const calculateChallengeXp = (party, thresholds) => {
  return party.reduce((memo, partyItem) => {
    memo.easy += thresholds[partyItem.level].easy * partyItem.players
    memo.medium += thresholds[partyItem.level].medium * partyItem.players
    memo.hard += thresholds[partyItem.level].hard * partyItem.players
    memo.deadly += thresholds[partyItem.level].deadly * partyItem.players
    return memo
  }, { easy: 0, medium: 0, hard: 0, deadly: 0 })
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
    const challengeXp = calculateChallengeXp(party, state.levelXpThreshold)
    state = Object.assign(state, { party, challengeXp })
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
    const challengeXp = calculateChallengeXp(party, state.levelXpThreshold)
    state = Object.assign(state, { party, challengeXp })
  }
}
