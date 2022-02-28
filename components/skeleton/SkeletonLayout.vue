<template>
  <div class="floating white">
    <v-container class="main-container d-flex justify-center align-center fill-height pb-8">
      <MainLogo />
    </v-container>
  </div>
</template>

<style scoped>
.floating {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 10;
}
</style>
