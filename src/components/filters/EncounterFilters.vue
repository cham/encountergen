<template>
  <v-app-bar
    class="pt-4"
  >
    <v-form>
      <v-row>
        <v-col>
          <v-select
            label="Environment"
            :items="environments"
            v-model="selectedEnvironment"
            outlined
          />
        </v-col>
        <v-col>
          <v-select
            label="Monster type"
            :items="monsterTypes"
            v-model="selectedMonsterType"
            outlined
          />
        </v-col>
      </v-row>
    </v-form>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EncounterFilters',
  data: () => ({
    selectedEnvironment: 'Any',
    selectedMonsterType: 'Any'
  }),
  computed: mapState('filters', [
    'environments',
    'monsterTypes'
  ])
}
</script>
