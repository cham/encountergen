const MAX_PACK_SIZE = 5
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

const encounterMultiplier = (numMonsters) => {
  if (numMonsters < 2) {
    return 1
  }
  if (numMonsters < 3) {
    return 1.5
  }
  if (numMonsters < 7) {
    return 2
  }
  if (numMonsters < 11) {
    return 2.5
  }
  if (numMonsters < 15) {
    return 3
  }
  return 4
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

export const topDown = (monsters, xplimit, cursor = 0, reverse) => {
  let group = []
  let totalXp = 0
  let maxIterations = 1000
  let monstersByXP = groupMonstersByXP(monsters)
  if (reverse) {
    monstersByXP = monstersByXP.reverse()
  }
  while (cursor < monstersByXP.length && maxIterations--) {
    let rowXp = monstersByXP[cursor].xp
    if ((rowXp + totalXp) * encounterMultiplier(group.length + 1) > xplimit) {
      cursor++
      continue
    }
    let randomMonster = randomItemFromArray(monstersByXP[cursor].monsters)
    if (group.filter(monster => monster.name === randomMonster.name && monster.xp === randomMonster.xp).length >= MAX_PACK_SIZE) {
      continue
    }
    group.push(Object.assign({}, randomMonster))
    totalXp += rowXp
  }
  return {
    monsters: combineSameMonsters(group),
    encounterXP: totalXp * encounterMultiplier(group.length),
    totalMonsters: group.length,
    signature: getGroupSignature(group, totalXp)
  }
}

export const bottomUp = (monsters, xplimit, cursor = 0) => {
  return topDown(monsters, xplimit, cursor, true)
}
