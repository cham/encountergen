<template>
  <div>
    <encounter-filters/>
    <encounters-list/>
  </div>
</template>

<script>
import EncounterFilters from '@/components/filters/EncounterFilters'
import EncountersList from '@/components/encounters/EncountersList'

export default {
  components: {
    EncounterFilters,
    EncountersList
  },
  name: 'BattleGenerator'
}
</script>
