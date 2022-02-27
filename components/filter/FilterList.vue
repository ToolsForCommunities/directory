<template>
  <v-sheet v-if="tags.length > 0" class="tag-filter-list">
    <v-chip-group
      v-model="selected"
      multiple
      active-class="primary--text"
      @change="addFilter"
    >
      <v-chip
        outlined
        class="px-1"
        @click="allFilters"
      >
        <v-icon class="pa-0 ma-0">
          mdi-tune
        </v-icon>
        <!-- {{ $t('filters.all') }} -->
        <!-- All filters -->
      </v-chip>
      <v-chip
        v-for="tag in tags"
        :key="tag.id"
        filter
        outlined
      >
        {{ tag.name }}
      </v-chip>
      <v-chip
        outlined
        @click="allFilters"
      >
        {{ $t('filters.all') }}
        <!-- All filters -->
      </v-chip>
    </v-chip-group>
  </v-sheet>
</template>

<script type="text/javascript">
export default {
  props: {
    for: {
      type: String,
      default: 'all'
    }
  },
  data: () => ({
    selected: []
  }),
  fetch () {
    return this.$store.dispatch('tag/list')
  },
  computed: {
    tags () {
      return this.$store.getters['tag/getByTarget'](this.for)
    }
  },
  methods: {
    allFilters () {
      if (this.$store.state.aside.current === 'filters') {
        // ToDo: Instead of clear, go back to last aside state
        return this.$store.dispatch('aside/clear')
      }

      return this.$store.dispatch('aside/set', 'filters')
    },
    addFilter (item) {
      // If "All Filters" is selected, remove it
      const allFiltersIndex = this.selected.indexOf(0)
      if (allFiltersIndex > -1) {
        this.selected.splice(allFiltersIndex, 1)
        return false
      }

      // Select the page to filter in
      let filterSource = this.for
      if (this.for === 'all') {
        filterSource = 'search'
      }

      // And set the tags
      const tags = this.selected.map(i => this.tags[i - 1])
      return this.$store.dispatch(`${filterSource}/setFilters`, tags)
    }
  }
}
</script>

<style>
.tag-filter-list .v-slide-group__prev--disabled,
.tag-filter-list .v-slide-group__next--disabled {
  display: none;
}
</style>
