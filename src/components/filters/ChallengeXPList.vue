<template>
  <div>
    <v-row>
      <v-col class="pa-0" cols="3">
        <small>Easy</small>
      </v-col>
      <v-col class="pa-0">
        <small>{{challengeXp.easy}}XP</small>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0" cols="3">
        <small>Medium</small>
      </v-col>
      <v-col class="pa-0">
        <small>{{challengeXp.medium}}XP</small>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0" cols="3">
        <small>Hard</small>
      </v-col>
      <v-col class="pa-0">
        <small>{{challengeXp.hard}}XP</small>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0" cols="3">
        <small>Deadly</small>
      </v-col>
      <v-col class="pa-0">
        <small>{{challengeXp.deadly}}XP</small>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0">
        <small>Monster XP multiplier shift, from party size: {{multiplierShift}}</small>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ChallengeXPList',
  computed: mapState('filters', [
    'challengeXp',
    'multiplierShift'
  ])
}
</script>
