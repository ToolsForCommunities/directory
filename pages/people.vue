<template>
  <!-- <div class="ct-container ct-container__has-topbar"> -->
  <div>
    <NavigationMainTopbar
      :title="$t('people.title')"
    />
    <v-container>
      <v-sheet>
        <v-chip-group
          multiple
          active-class="primary--text"
        >
          <v-chip @click="$store.dispatch('aside/set', 'filters')">
            {{ $t('filters.all') }}
            <!-- All filters -->
          </v-chip>
          <v-chip
            v-for="tag in tags"
            :key="tag.id"
          >
            {{ tag.name }}
          </v-chip>
        </v-chip-group>
      </v-sheet>
      </v-row>

      <!-- Person Cards Skeletons -->
      <v-row
        v-if="$store.state.people.list.length === 0"
        dense
      >
        <v-col
          v-for="i in 6"
          :key="i"
          cols="6"
          lg="4"
        >
          <v-skeleton-loader
            v-bind="attrs"
            type="image, article"
          />
        </v-col>
      </v-row>
      <!-- Person Cards -->
      <v-row
        v-else
        dense
      >
        <v-col
          v-for="person in people"
          :key="person.id"
          cols="6"
          lg="4"
        >
          <PersonCard
            v-bind="person"
            :startup="person.Group && person.Group[0]"
          />
        </v-col>
      </v-row>

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
      this.$store.dispatch('people/list')
    ])
    // return this.$store.dispatch('people/list')
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
    tags () {
      return this.$store.state.tag.list || []
    },
    people () {
      if (this.itemsToShow >= this.$store.state.people.list.length) {
        return this.$store.state.people.list
      }

      return this.$store.state.people.list.slice(0, this.itemsToShow)
    }
  },
  // created () {
  //   if (this.$store.state.people.list.length === 0) {
  //     this.$store.dispatch('people/list')
  //   }
  //   if (this.$store.state.tag.list.length === 0) {
  //     this.$store.dispatch('tag/list')
  //   }
  // },
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

>>> .v-slide-group__prev--disabled,
>>> .v-slide-group__next--disabled {
  display: none;
}
</style>
