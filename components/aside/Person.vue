<template>
  <div>
    <v-app-bar
      flat
      color="white"
    >
      <v-btn
        icon
        nuxt-link
        :to="{ query: {} }"
        @click="$store.dispatch('aside/clear')"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn
        icon
      >
        <v-icon>mdi-more</v-icon>
      </v-btn>
    </v-app-bar>
    <v-divider />

    <p>I'm a person ^^</p>
  </div>
</template>
