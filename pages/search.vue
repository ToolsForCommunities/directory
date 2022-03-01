<template>
  <!-- <div class="ct-container ct-container__has-topbar"> -->
  <div>
    <NavigationSearchTopbar
      title="Search"
      @search="search"
    >
      <v-tabs
        slot="extension"
        v-model="tab"
        centered
        fixed-tabs
      >
        <!-- <v-tab>
          All
        </v-tab> -->
        <v-tab
          @click="$router.replace({ query: { tab: 'people' } })"
        >
          People
        </v-tab>
        <v-tab
          @click="$router.replace({ query: { tab: 'startups' } })"
        >
          Startups
        </v-tab>
      </v-tabs>
    </NavigationSearchTopbar>

    <v-container>
      <v-tabs-items v-model="tab">
        <!-- All tab -->
        <!-- <v-tab-item>
          <h2>All results</h2>
        </v-tab-item> -->

        <!-- People tab -->
        <v-tab-item>
          <PersonCardList :people="people" />

          <!-- Infinite scroll dispatcher -->
          <div v-intersect="infiniteScrollingPeople" class="py-4" />
        </v-tab-item>

        <!-- Startup tab -->
        <v-tab-item>
          <StartupCardList :startups="startups" />

          <!-- Infinite scroll dispatcher -->
          <div v-intersect="infiniteScrollingStartups" class="py-4" />
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
export default {
  middleware: ['search'],
  data: () => ({
    tab: 0,
    searchText: '',
    peopleToShow: 12,
    startupsToShow: 12
  }),
  fetch () {
    return Promise.all([
      this.$store.dispatch('people/list'),
      this.$store.dispatch('startups/list')
    ])
  },
  head () {
    return {
      titleTemplate: `%s - ${this.$settings.title}` || '%s - Community Tools',
      title: 'Search',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Search for anyone in your directory'
        }
      ]
    }
  },
  computed: {
    people () {
      const list = this.$store.getters['people/search'](this.searchText)

      if (this.peopleToShow >= list.length) {
        return list
      }

      return list.slice(0, this.peopleToShow)
    },
    startups () {
      const list = this.$store.getters['startups/search'](this.searchText)

      if (this.peopleToShow >= list.length) {
        return list
      }

      return list.slice(0, this.peopleToShow)
    }
  },
  methods: {
    search (text) {
      this.searchText = text
    },
    infiniteScrollingPeople () {
      return this.infiniteScrolling('people')
    },
    infiniteScrollingStartups () {
      return this.infiniteScrolling('startups')
    },
    infiniteScrolling (page) {
      const itemsToAdd = 9

      let itemsToShow = 0
      if (page === 'people') {
        itemsToShow = this.peopleToShow
      } else if (page === 'startups') {
        itemsToShow = this.startupsToShow
      }

      if (this.$store.state.people.list.length === 0) {
        return false
      }

      if (itemsToShow === this.$store.state.people.list.length) {
        return false
      } else if (itemsToShow + itemsToAdd >= this.$store.state.people.list.length) {
        itemsToShow = this.$store.state.people.list.length
      } else {
        itemsToShow += itemsToAdd
      }

      if (page === 'people') {
        this.peopleToShow = itemsToShow
      } else if (page === 'startups') {
        this.startupsToShow = itemsToShow
      }

      return true
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
