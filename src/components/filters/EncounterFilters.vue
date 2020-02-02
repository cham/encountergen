<template>
  <v-app-bar
    class="pt-4"
    dark
    fixed
  >
    <v-form style="width:100%">
      <v-row>
        <v-col cols="3">
          <v-select
            label="Environment"
            :items="environments"
            v-model="selectedEnvironment"
            outlined
            @change="setEnvironment({ environment: selectedEnvironment })"
          />
        </v-col>
        <v-col cols="3">
          <v-select
            label="Monster type"
            :items="monsterTypes"
            v-model="selectedMonsterType"
            outlined
            @change="setMonsterType({ monsterType: selectedMonsterType })"
          />
        </v-col>
        <v-col cols="3">
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
        <v-col cols="3">
          <v-btn icon style="float:right" @click="showMenu = !showMenu">
            <v-icon>settings</v-icon>
          </v-btn>
          <v-card dark class="settingsMenu pa-4" v-if="showMenu">
            <settings/>
          </v-card>
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
import Settings from '@/components/filters/Settings'

export default {
  name: 'EncounterFilters',
  components: {
    PartySize,
    Settings
  },
  data: () => ({
    selectedEnvironment: 'Any',
    selectedMonsterType: 'Any',
    showPartyModal: false,
    showMenu: false
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

<style scoped>
.settingsMenu {
  position: absolute;
  top: 48px;
  right: 0;
  min-width: 320px;
}
</style>
