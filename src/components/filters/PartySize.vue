<template>
  <v-container>
    <party-size-item
      v-for="partyItem in party"
      :key="`party-${partyItem.id}`"
      :players="partyItem.players"
      :level="partyItem.level"
      :id="partyItem.id"
    />
    <v-btn @click="addPartyItem">And...</v-btn>
    <p>Easy: {{challengeXp.easy}}XP</p>
    <p>Medium: {{challengeXp.medium}}XP</p>
    <p>Hard: {{challengeXp.hard}}XP</p>
    <p>Deadly: {{challengeXp.deadly}}XP</p>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PartySizeItem from '@/components/filters/PartySizeItem'

export default {
  name: 'PartySize',
  components: {
    PartySizeItem
  },
  computed: mapState('filters', [
    'party',
    'challengeXp'
  ]),
  methods: mapActions('filters', [
    'addPartyItem'
  ])
}
</script>
