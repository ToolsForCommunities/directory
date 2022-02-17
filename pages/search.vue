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
          <PersonCardList :people="people" />
        </v-tab-item>

        <v-tab-item>
          <StartupCardList :startups="startups" />
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    peopleToShow: 12,
    startupsToShow: 12
  }),
  computed: {
    people () {
      // const list = this.$store.state.people.list
      const list = this.$store.getters['people/selected']

      if (this.peopleToShow >= list.length) {
        return list
      }

      return list.slice(0, this.peopleToShow)
    },
    startups () {
      if (this.startupsToShow >= this.$store.state.startup.list.length) {
        return this.$store.state.startup.list
      }

      return this.$store.state.startup.list.slice(0, this.startupsToShow)
    }
  }
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
