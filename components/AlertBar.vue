<template>
  <v-snackbar
    v-model="$store.state.alerts.visible"
    :color="$store.state.alerts.color"
  >
    <span>
      {{ $store.state.alerts.text }}
    </span>
  </v-snackbar>
</template>
