<template>
  <v-row>
    <v-col cols="2">
      {{monster.count}} x {{monster.name}}
    </v-col>
    <v-col cols="2">
      {{monster.type}}
    </v-col>
    <v-col cols="1">
      {{monster.xp}}XP
    </v-col>
    <v-col cols="1">
      {{monster.page}}
    </v-col>
    <v-col cols="2">
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
