<template>
  <div>
    <p class="pa-0 mb-1">
      <small>Easy: {{challengeXp.easy}}XP</small>
    </p>
    <p class="pa-0 mb-1">
      <small>Medium: {{challengeXp.medium}}XP</small>
    </p>
    <p class="pa-0 mb-1">
      <small>Hard: {{challengeXp.hard}}XP</small>
    </p>
    <p class="pa-0 mb-1">
      <small>Deadly: {{challengeXp.deadly}}XP</small>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ChallengeXPList',
  computed: mapState('filters', [
    'challengeXp'
  ])
}
</script>
