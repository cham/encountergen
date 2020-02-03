<template>
  <v-card class="pa-4 ma-4 mb-8">
    <h4>
      Encounter XP: {{encounter.encounterXP}} ({{encounter.totalMonsters}} mob{{encounter.totalMonsters !== 1 ? 's' : ''}})
      <v-chip v-if="encounter.encounterXP >= challengeXp.deadly" color="red" dark>Deadly</v-chip>
      <v-chip v-else-if="encounter.encounterXP >= challengeXp.hard" color="orange" dark>Hard</v-chip>
      <v-chip v-else-if="encounter.encounterXP >= challengeXp.medium" color="yellow">Medium</v-chip>
      <v-chip v-else-if="encounter.encounterXP >= challengeXp.easy" color="green">Easy</v-chip>
    </h4>
    <h5>
      XP per player: {{encounter.playerXP}}
    </h5>
    <monster-card
      v-for="monster in encounter.monsters"
      :key="`${encounter.id}-${monster.name}-${monster.xp}`"
      :monster="monster"
    />
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import MonsterCard from '@/components/encounters/MonsterCard'

export default {
  name: 'EncounterCard',
  components: {
    MonsterCard
  },
  props: ['encounter'],
  computed: mapState('filters', [
    'challengeXp'
  ])
}
</script>
