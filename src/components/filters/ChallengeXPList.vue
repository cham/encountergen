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
    <v-row v-if="multiplierShift === 1">
      <v-col class="pa-0">
        <p class="ma-0">
          <small>Monster XP multiplier has been <strong>increased</strong> as there are less than 3 players</small>
        </p>
        <p class="ma-0">
          <small>You will get <strong>less</strong> monsters as a result!</small>
        </p>
      </v-col>
    </v-row>
    <v-row v-if="multiplierShift === -1">
      <v-col class="pa-0">
        <p class="ma-0">
          <small>Monster XP multiplier has been <strong>decreased</strong> as there are more than 5 players</small>
        </p>
        <p class="ma-0">
          <small>You will get <strong>more</strong> monsters as a result!</small>
        </p>
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
