<template>
  <v-toolbar
    flat
    dense
  >
    <v-btn
      icon
      @click="$store.dispatch('aside/clear')"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-toolbar-title>Filters</v-toolbar-title>

    <v-spacer />

    <CTButton
      text
      @click="$emit('clear')"
    >
      Clear all
    </CTButton>
  </v-toolbar>
</template>
