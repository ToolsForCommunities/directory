<template>
  <div class="aside-card ma-4">
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

      <v-toolbar-title>
        Profile
      </v-toolbar-title>

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
            <v-list-item-title>Option 1</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Option 2</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Option 3</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-divider />

    <div class="pa-4">
      <p>I'm a person ^^</p>
      <p>{{ $store.state.aside }}</p>

      <CTLol />

      <PersonCard />
      <PersonCard />
    </div>
  </div>
</template>

<style scoped>
.aside-card {
  border:  1px solid var(--v-grey-base);
  /*border:  1px solid var(--v-grey-lighten1);*/
}

.aside-card,
.aside-card .v-toolbar {
  border-radius: 8px;
}
</style>
