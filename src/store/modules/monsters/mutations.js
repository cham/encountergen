import * as types from '../../types'
import { cascade, ascend, topDown, bottomUp } from '../../../groupGenerators'

const getEncounterGroups = (fn, filteredMonsters, challengeXp) => {
  const groups = []
  for (var i = 0; i < 10; i++) {
    groups.push({
      id: `${fn.name}-maximum-${i}-${Math.random()}`, ...fn(filteredMonsters, challengeXp.maximum, i)
    })
    groups.push({
      id: `${fn.name}-deadly-${i}-${Math.random()}`, ...fn(filteredMonsters, challengeXp.deadly, i)
    })
    groups.push({
      id: `${fn.name}-hard-${i}-${Math.random()}`, ...fn(filteredMonsters, challengeXp.hard, i)
    })
    groups.push({
      id: `${fn.name}-medium-${i}-${Math.random()}`, ...fn(filteredMonsters, challengeXp.medium, i)
    })
  }
  return groups
}

export default {
  [types.MONSTERS_SET_FILTER] (state, { environment, monsterType, query, challengeXp }) {
    const monsters = state.monsterList
    let filteredMonsters = monsters
    if (environment && environment !== 'Any') {
      filteredMonsters = filteredMonsters.filter(monster => (monster.environment || {})[environment])
    }
    if (monsterType && monsterType !== 'Any') {
      filteredMonsters = filteredMonsters.filter(monster => monster.type === monsterType)
    }
    if (query) {
      filteredMonsters = filteredMonsters.filter(monster => monster.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
    }
    filteredMonsters = filteredMonsters
      .filter(m => m.xp <= challengeXp.deadly && m.xp > 0)
      .sort((a, b) => b.xp - a.xp)

    const encounterGroups = getEncounterGroups(cascade, filteredMonsters, challengeXp)
      .concat(getEncounterGroups(ascend, filteredMonsters, challengeXp))
      .concat(getEncounterGroups(topDown, filteredMonsters, challengeXp))
      .concat(getEncounterGroups(bottomUp, filteredMonsters, challengeXp))
      .filter(group => group.encounterXP >= (challengeXp.easy || 1))
      .reduce((memo, group) => {
        if (!memo.find(groupMem => groupMem.signature === group.signature)) {
          memo.push(group)
        }
        return memo
      }, [])
      .sort((a, b) => b.encounterXP - a.encounterXP)

    state = Object.assign(state, { filteredMonsters, encounterGroups })
  }
}
