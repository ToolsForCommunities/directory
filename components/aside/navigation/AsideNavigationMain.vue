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

    <v-menu
      bottom
      left
    >
      <template #activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>Edit</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Report</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Share</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
