<template>
  <v-app>
    <v-content>
      <div class="background">
        <div class="background-fade"/>
      </div>
      <router-view class="foreground"/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
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
  background: rgba(0, 0, 0, 0.6)
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
</style>
