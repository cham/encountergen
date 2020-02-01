<template>
  <v-card class="pa-4 ma-4 mb-8">
    <h4 color="#fff">Encounter XP: {{encounter.encounterXP}} ({{encounter.totalMonsters}} mob{{encounter.totalMonsters !== 1 ? 's' : ''}})</h4>
    <monster-card
      v-for="monster in encounter.monsters"
      :key="`${encounter.id}-${monster.name}-${monster.xp}`"
      :monster="monster"
    />
  </v-card>
</template>

<script>
import MonsterCard from '@/components/encounters/MonsterCard'

export default {
  name: 'EncounterCard',
  components: {
    MonsterCard
  },
  props: ['encounter']
}
</script>
