<template>
  <v-form ref="form">
    <v-text-field
      v-model="p_maxPackSize"
      label="Maximum pack size"
      type="number"
      :min="1"
      :max="20"
      :rules="[rules.required, rules.positive, rules.max(20)]"
      autocomplete="new-password"
      style="width:280px"
      outlined
      @change="onChange"
    />
    <v-text-field
      v-model="p_totalMonsters"
      label="Maximum encounter size"
      type="number"
      :min="1"
      :max="20"
      :rules="[rules.required, rules.positive, rules.max(20), rules.min(p_maxPackSize)]"
      autocomplete="new-password"
      style="width:280px"
      outlined
      @change="onChange"
    />
  </v-form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Settings',
  data: () => ({
    valid: false,
    p_maxPackSize: null,
    p_totalMonsters: null,
    rules: {
      required: v => !!v || 'Required',
      positive: v => v > 0 || 'Must be above 0',
      max: ceil => v => v <= ceil || `Must be ${ceil} or less`,
      min: floor => v => v >= parseInt(floor) || `Must be ${floor} or greater`
    }
  }),
  methods: {
    ...mapActions('filters', [
      'setSettings'
    ]),
    onChange () {
      /* eslint-disable */
      console.log('change')
      this.p_totalMonsters = Math.max(this.p_totalMonsters, this.p_maxPackSize)
      this.$nextTick(() => {
        if (!this.$refs.form.validate()) {
          console.log('invalid')
          return
        }
        console.log('set')
        this.setSettings({
          maxPackSize: parseInt(this.p_maxPackSize),
          totalMonsters: parseInt(this.p_totalMonsters)
        })
      })
    },
    syncWithState () {
      this.p_maxPackSize = this.maxPackSize
      this.p_totalMonsters = this.totalMonsters
    }
  },
  computed: mapState('filters', [
    'maxPackSize',
    'totalMonsters'
  ]),
  watch: {
    players () {
      this.syncWithState()
    },
    level () {
      this.syncWithState()
    }
  },
  mounted () {
    this.syncWithState()
  }
}
</script>
