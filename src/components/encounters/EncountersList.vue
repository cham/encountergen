<template>
  <v-row class="encounterslist">
    <v-col
      xl="3"
      lg="4"
      md="6"
      sm="6"
      cols="12"
      v-for="group in encounterGroups"
      :key="`${group.id}`"
    >
      <encounter-card
        style="font-size: 14px"
        :encounter="group"
      />
    </v-col>
  </v-row>
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
