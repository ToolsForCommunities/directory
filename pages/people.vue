<template>
  <div>
    <NavigationMainTopbar
      :title="$t('people.title')"
    />
    <v-container class="pt-0 mt-2">
      <!-- Filters -->
      <FilterList for="people" class="mb-1" />

      <PersonCardList :people="people" />

      <!-- Infinite scroll dispatcher -->
      <div v-intersect="infiniteScrolling" class="py-4" />
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    itemsToShow: 12
  }),
  fetch () {
    return this.$store.dispatch('people/list')
  },
  head: {
    title: 'People',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'All the people in your directory'
      }
    ]
  },
  computed: {
    people () {
      // const list = this.$store.state.people.list
      const list = this.$store.getters['people/selected']

      if (this.itemsToShow >= list.length) {
        return list
      }

      return list.slice(0, this.itemsToShow)
    }
  },
  methods: {
    infiniteScrolling () {
      const itemsToAdd = 9

      if (this.$store.state.people.list.length === 0) {
        return false
      }

      if (this.itemsToShow === this.$store.state.people.list.length) {
        return false
      } else if (this.itemsToShow + itemsToAdd >= this.$store.state.people.list.length) {
        this.itemsToShow = this.$store.state.people.list.length
      } else {
        this.itemsToShow += itemsToAdd
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
</style>
