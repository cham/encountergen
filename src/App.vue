<template>
  <v-app>
    <v-content>
      <div class="background" :class="environmentBackground">
        <div class="background-fade"/>
      </div>
      <router-view class="foreground"/>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState('filters', [
      'environment'
    ]),
    environmentBackground () {
      return `background-${this.environment}`
    }
  }
}
</script>

<style scoped>
.background,
.foreground,
.background-fade {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0
}
.background-fade {
  background: rgba(0, 0, 0, 0.4)
}
.background {
  background-image: url('./assets/background.jpg');
  background-size: cover;
  z-index: 0;
}
.foreground {
  position: absolute;
  top: 64px;
  z-index: 1;
}
.background-Arctic {
  background-image: url('./assets/backgrounds/Arctic.jpg');
}
.background-Coastal {
  background-image: url('./assets/backgrounds/Coastal.jpg');
}
.background-Desert {
  background-image: url('./assets/backgrounds/Desert.jpg');
}
.background-Forest {
  background-image: url('./assets/backgrounds/Forest.jpg');
}
.background-Grassland {
  background-image: url('./assets/backgrounds/Grassland.jpg');
}
.background-Hill {
  background-image: url('./assets/backgrounds/Hill.jpg');
}
.background-Jungle {
  background-image: url('./assets/backgrounds/Jungle.png');
}
.background-Mountain {
  background-image: url('./assets/backgrounds/Mountain.jpg');
}
.background-Swamp {
  background-image: url('./assets/backgrounds/Swamp.jpg');
}
.background-Underdark {
  background-image: url('./assets/backgrounds/Underdark.jpg');
}
.background-Underwater {
  background-image: url('./assets/backgrounds/Underwater.jpg');
}
.background-Urban {
  background-image: url('./assets/backgrounds/Urban.jpg');
}
</style>
