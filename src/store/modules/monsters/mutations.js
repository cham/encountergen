import * as types from '../../types'

export default {
  [types.MONSTERS_SET_FILTER] (state, filterState) {
    const monsters = state.monsterList
    let filteredMonsters = monsters
    if (filterState.environment && filterState.environment !== 'Any') {
      filteredMonsters = filteredMonsters.filter(monster => Object.keys(monster.environment || {}).indexOf(filterState.environment) > -1)
    }
    if (filterState.monsterType && filterState.monsterType !== 'Any') {
      filteredMonsters = filteredMonsters.filter(monster => monster.type === filterState.monsterType)
    }
    filteredMonsters = filteredMonsters
      .filter(m => m.xp <= filterState.challengeXp.deadly)
      .sort((a, b) => b.xp - a.xp)
      .map(monster => ({
        ...monster,
        easy: monster.xp <= filterState.challengeXp.easy,
        medium: monster.xp <= filterState.challengeXp.medium,
        hard: monster.xp <= filterState.challengeXp.hard,
        deadly: monster.xp <= filterState.challengeXp.deadly
      }))
    state = Object.assign(state, { filteredMonsters })
  }
}
