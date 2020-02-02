<template>
  <v-row>
    <v-col cols="5">
      {{monster.count}} x {{monster.name}}
    </v-col>
    <v-col cols="4">
      <p class="ma-0">{{monster.xp}}XP</p>
      <p class="ma-0">{{monster.type}}</p>
      <p class="ma-0">{{monster.page}}</p>
    </v-col>
    <v-col cols="3">
      <v-img
        v-if="monster.img_url"
        :src="monster.img_url"
        height="100"
        max-width="100"
        position="top center"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'MonsterCard',
  props: ['monster']
}
</script>
