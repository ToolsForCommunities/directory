<template>
  <div>
    <v-app-bar
      flat
      color="white"
    >
      <h2>Carlos Hernandez</h2>
      <v-spacer />
      <v-btn
        icon
        nuxt-link
        :to="{ query: {} }"
        @click="$store.dispatch('aside/clear')"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-app-bar>
    <v-divider />

    <p>I'm a person ^^</p>
    <p>{{ $store.state.aside }}</p>
  </div>
</template>
