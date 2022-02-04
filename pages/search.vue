<template>
  <!-- <div class="ct-container ct-container__has-topbar"> -->
  <div>
    <NavigationSearchTopbar
      title="Search"
    >
      <v-tabs
        slot="extension"
        v-model="tab"
        centered
        fixed-tabs
      >
        <v-tab>
          All
        </v-tab>
        <v-tab>
          People
        </v-tab>
        <v-tab>
          Startups
        </v-tab>
      </v-tabs>
    </NavigationSearchTopbar>
    <v-container>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <h2>All results</h2>
        </v-tab-item>

        <v-tab-item>
          <h2>People found</h2>
        </v-tab-item>

        <v-tab-item>
          <h2>Startups found</h2>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: null
  })
}
</script>

<style scoped>
.ct-container {
  height: 100vh;
  max-height: 100vh;
  overflow: auto;
}
  .ct-container__has-topbar {
    padding-top: 64px;
  }

>>> .v-tab {
  max-width: 120px;
}
</style>
