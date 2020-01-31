<template>
  <v-form
    v-model="valid"
    ref="form"
  >
    <v-row align="center">
      <v-col cols="4">
        <v-text-field
          v-model="p_players"
          single-line
          label="Players"
          prepend-icon="people"
          type="number"
          :min="1"
          :max="20"
          :rules="[rules.required, rules.positive, rules.max(20)]"
          autocomplete="new-password"
          style="width:140px"
          @change="onChange"
        />
      </v-col>
      <v-col class="text-center">
        at level
      </v-col>
      <v-col>
        <v-text-field
          v-model="p_level"
          single-line
          label="level"
          type="number"
          :min="1"
          :max="20"
          :rules="[rules.required, rules.positive, rules.max(20)]"
          autocomplete="new-password"
          style="width:100px"
          @change="onChange"
        />
      </v-col>
      <v-btn
        v-if="party.length > 1"
        fab
        small
        dark
        color="red"
        class="elevation-0"
        @click="onDelete"
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </v-row>
  </v-form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'PartySizeItem',
  props: {
    players: {
      type: Number
    },
    level: {
      type: Number
    },
    id: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    valid: false,
    p_players: null,
    p_level: null,
    rules: {
      required: v => !!v || 'Required',
      positive: v => v > 0 || 'Must be above 0',
      max: ceil => v => v <= ceil || `Must be ${ceil} or less`,
    }
  }),
  computed: mapState('filters', [
    'party'
  ]),
  methods: {
    ...mapActions('filters', [
      'setPartyItem',
      'deletePartyItem'
    ]),
    onChange() {
      if (!this.valid) {
        return
      }
      this.setPartyItem({
        id: this.id,
        players: parseInt(this.p_players),
        level: parseInt(this.p_level)
      })
    },
    onDelete () {
      this.deletePartyItem({ id: this.id })
    }
  },
  watch: {
    players () {
      this.p_players = this.players
    },
    level () {
      this.p_level = this.level
    }
  }
}
</script>
