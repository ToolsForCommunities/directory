<template>
  <!-- <div class="ct-container ct-container__has-topbar"> -->
  <div>
    <!-- Page Navbar -->
    <NavigationMainTopbar
      :title="$t('startups.title')"
    >
      <template slot="options">
        <AddNewButton />
      </template>
    </NavigationMainTopbar>

    <!-- Page Content -->
    <v-container>
      <FilterList for="startups" />

      <StartupCardList :startups="startups" />

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
    return Promise.all([
      this.$store.dispatch('tag/list'),
      this.$store.dispatch('startups/list')
    ])
  },
  head () {
    return {
      title: this.$settings.startupsText || 'Startups',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `All the ${this.$settings.startupsText || 'startups'} in your directory`
        }
      ]
    }
  },
  computed: {
    tags () {
      return this.$store.state.tag.list || []
    },
    startups () {
      const list = this.$store.getters['startups/selected']

      if (this.itemsToShow >= list.length) {
        return list
      }

      return list.slice(0, this.itemsToShow)
    }
    // startups () {
    //   if (this.itemsToShow >= this.$store.state.startups.list.length) {
    //     return this.$store.state.startups.list
    //   }

    //   return this.$store.state.startups.list.slice(0, this.itemsToShow)
    // }
  },
  methods: {
    infiniteScrolling () {
      const itemsToAdd = 9

      if (this.$store.state.startups.list.length === 0) {
        return false
      }

      if (this.itemsToShow === this.$store.state.startups.list.length) {
        return false
      } else if (this.itemsToShow + itemsToAdd >= this.$store.state.startups.list.length) {
        this.itemsToShow = this.$store.state.startups.list.length
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

>>> .v-slide-group__prev--disabled,
>>> .v-slide-group__next--disabled {
  display: none;
}
</style>
