<template>
  <div>
    <v-app-bar
      flat
      color="white"
      class="hidden-sm-and-down main-account-switcher"
    >
      <ProfileDropdown />
    </v-app-bar>
    <v-divider />

    <div v-if="!$store.state.aside.current">
      <p>I'm the default lateral content</p>
    </div>

    <AsidePerson v-else-if="$store.state.aside.current === 'person'" />

    <div v-else>
      <p>{{ $store.state.aside }}</p>
    </div>
  </div>
</template>

<style scoped>
.main-account-switcher >>> .v-toolbar__content {
  padding: 0 !important;
}
</style>
