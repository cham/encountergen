import { encounterMultiplierLevels } from '../assets/json/encounterMultiplierLevels.json'

const randomItemFromArray = arr => arr[Math.floor(arr.length * Math.random())]

const getGroupSignature = (group, totalXp) => `${totalXp}-` + group.sort((a, b) => {
  if (a.name > b.name) {
    return -1
  }
  if (b.name > a.name) {
    return 1
  }
  return 0
}).reduce((memo, monster) => memo + `${monster.count}-${monster.name}-${monster.xp}`, '')

const groupMonstersByXP = monsters => monsters.reduce((memo, monster) => {
  const row = memo.find(xpGroup => xpGroup.xp === monster.xp)
  if (!row) {
    memo.push({ xp: monster.xp, monsters: [monster] })
  } else {
    row.monsters.push(monster)
  }
  return memo
}, [])

const encounterMultiplier = (multiplierShift, numMonsters) => {
  if (numMonsters < 1) {
    return 0
  }
  const applicableLevels = encounterMultiplierLevels.filter(levelData => levelData.numberOfMonsters <= numMonsters)
  return encounterMultiplierLevels[applicableLevels.length - 1 + multiplierShift].multiplier
}

const combineSameMonsters = group => group.reduce((memo, monster) => {
  const monsterInMemo = memo.find(memoMonster => memoMonster.name === monster.name && memoMonster.xp === monster.xp)
  if (monsterInMemo) {
    monsterInMemo.count++
  } else {
    monster.count = 1
    memo.push(monster)
  }
  return memo
}, [])

export const topDown = (monsters, xplimit, maxPackSize, maxTotalMonsters, multiplierShift, cursor = 0, reverse, cascade) => {
  let group = []
  const packsDone = []
  let totalXp = 0
  let maxIterations = 1000
  let monstersByXP = groupMonstersByXP(monsters)
  if (reverse) {
    monstersByXP = monstersByXP.reverse()
  }
  let randomMonster
  while (cursor < monstersByXP.length && maxIterations--) {
    if (group.length >= maxTotalMonsters) {
      break
    }
    const rowXp = monstersByXP[cursor].xp
    const nextXp = (rowXp + totalXp) * encounterMultiplier(multiplierShift, group.length + 1)
    if (nextXp > xplimit) {
      randomMonster = null
      cursor++
      continue
    }
    if (!randomMonster) {
      randomMonster = randomItemFromArray(monstersByXP[cursor].monsters)
      if (packsDone.indexOf(`${randomMonster.name}${randomMonster.xp}`) > -1) {
        randomMonster = null
        continue
      }
    }
    const packFull = group.filter(monster => monster.name === randomMonster.name && monster.xp === randomMonster.xp).length >= maxPackSize
    if (packFull) {
      packsDone.push(`${randomMonster.name}${randomMonster.xp}`)
      randomMonster = null
      continue
    }
    group.push(Object.assign({}, randomMonster))
    totalXp += rowXp
    if (cascade) {
      randomMonster = null
      cascade = false
      cursor++
    }
  }
  return {
    monsters: combineSameMonsters(group),
    encounterXP: totalXp * encounterMultiplier(multiplierShift, group.length),
    totalMonsters: group.length,
    signature: getGroupSignature(group, totalXp)
  }
}

export const bottomUp = (monsters, xplimit, maxPackSize, maxTotalMonsters, multiplierShift, cursor = 0) => {
  return topDown(monsters, xplimit, maxPackSize, maxTotalMonsters, multiplierShift, cursor, true)
}

export const cascade = (monsters, xplimit, maxPackSize, maxTotalMonsters, multiplierShift, cursor = 0) => {
  return topDown(monsters, xplimit, maxPackSize, maxTotalMonsters, multiplierShift, cursor, false, true)
}
