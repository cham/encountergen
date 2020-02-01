<template>
  <div class="encounterslist">
    <encounter-card
      v-for="group in encounterGroups"
      :key="`${group.id}`"
      :encounter="group"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EncounterCard from '@/components/encounters/EncounterCard'

export default {
  name: 'EncountersList',
  components: {
    EncounterCard
  },
  computed: mapState('monsters', [
    'filteredMonsters',
    'encounterGroups'
  ])
}
</script>

<style scoped>
.encounterslist {
}
</style>
