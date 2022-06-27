<template>
  <v-toolbar
    dense
    flat
    color="white"
  >
    <!-- nuxt-link
      :to="{ query: {} }" -->
    <v-btn
      icon
      @click="$store.dispatch('aside/clear')"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <v-toolbar-title class="pl-2 text-truncate" />

    <v-spacer />

    <slot name="options" />
  </v-toolbar>
</template>
