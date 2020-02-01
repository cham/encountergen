<template>
  <v-app-bar
    class="pt-4"
    dark
    fixed
  >
    <v-form>
      <v-row>
        <v-col>
          <v-select
            label="Environment"
            :items="environments"
            v-model="selectedEnvironment"
            outlined
            @change="setEnvironment({ environment: selectedEnvironment })"
          />
        </v-col>
        <v-col>
          <v-select
            label="Monster type"
            :items="monsterTypes"
            v-model="selectedMonsterType"
            outlined
            @change="setMonsterType({ monsterType: selectedMonsterType })"
          />
        </v-col>
        <v-col cols="4">
          <v-btn
            class="mt-2"
            text
            outlined
            dark
            @click="showPartyModal = true"
          >
            Set party size
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-dialog v-model="showPartyModal" width="500">
      <v-card dark class="pa-4">
        <party-size/>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PartySize from '@/components/filters/PartySize'

export default {
  name: 'EncounterFilters',
  components: {
    PartySize
  },
  data: () => ({
    selectedEnvironment: 'Any',
    selectedMonsterType: 'Any',
    showPartyModal: false
  }),
  computed: mapState('filters', [
    'environments',
    'monsterTypes'
  ]),
  methods: mapActions('filters', [
    'setEnvironment',
    'setMonsterType'
  ])
}
</script>
