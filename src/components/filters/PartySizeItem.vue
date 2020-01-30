<template>
  <v-form
    v-model="valid"
  >
    <v-row align="center">
      <v-col>
        <v-text-field
          v-model="p_players"
          single-line
          label="Number of players"
          prepend-icon="people"
          type="number"
          :min="1"
          :max="20"
          :rules="[rules.required, rules.positive, rules.max(20)]"
          autocomplete="new-password"
          style="width:180px"
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
          style="width:180px"
          @change="onChange"
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'

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
  methods: {
    ...mapActions('filters', [
      'setPartyItem'
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
