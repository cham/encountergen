<template>
  <v-container>
    <party-size-item
      v-for="partyItem in party"
      :key="`party-${partyItem.id}`"
      :players="partyItem.players"
      :level="partyItem.level"
      :id="partyItem.id"
    />
    <v-row justify="center">
      <v-btn
        text
        outlined
        dark
        @click="addPartyItem"
      >
        And...
      </v-btn>
    </v-row>
    <challenge-x-p-list v-if="totalPlayers > 0" />
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PartySizeItem from '@/components/filters/PartySizeItem'
import ChallengeXPList from '@/components/filters/ChallengeXPList'

export default {
  name: 'PartySize',
  components: {
    PartySizeItem,
    ChallengeXPList
  },
  computed: mapState('filters', [
    'party',
    'totalPlayers'
  ]),
  methods: mapActions('filters', [
    'addPartyItem'
  ])
}
</script>
