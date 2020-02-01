<template>
  <div class="encounterslist">
    <p
      v-for="monster in filteredMonsters"
      :key="`monster-${monster.name}-${monster.xp}`"
      style="color:#fff"
    >
      {{monster.name}} - {{monster.xp}}
      <span      v-if="monster.easy">Easy</span>
      <span v-else-if="monster.medium">Medium</span>
      <span v-else-if="monster.hard">Hard</span>
      <span v-else-if="monster.deadly">Deadly</span>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EncountersList',
  computed: mapState('monsters', [
    'filteredMonsters'
  ])
}
</script>

<style scoped>
.encounterslist {
}
</style>
