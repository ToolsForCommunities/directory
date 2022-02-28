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
import getTagIndex from '@/assets/js/helpers/getTagIndex'
import getViewCategory from '@/assets/js/helpers/getViewCategory'

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
    },
    filterSource () {
      // Select the page to filter in
      let filterSource = this.for
      if (this.for === 'all') {
        filterSource = 'search'
      }
      return filterSource
    },
    selectedFilters () {
      return this.$store.state[this.filterSource].filters
    }
  },
  watch: {
    selectedFilters () {
      this.setSelected()
    }
  },
  mounted () {
    this.setSelected()
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

      // And set the tags
      const tags = this.selected.map(i => this.tags[i - 1])

      // Track the event
      this.$store.dispatch('track/event', {
        action: 'filter_list',
        category: getViewCategory(this.$route.name.split('__')[0]),
        label: 'tags',
        value: tags.length
      })

      return this.$store.dispatch(`${this.filterSource}/setFilters`, tags)
    },
    setSelected () {
      const selected = this.selectedFilters || []
      this.selected = []

      for (let i = 0; i < selected.length; i++) {
        const index = getTagIndex(this.tags, selected[i])

        if (index > -1) {
          this.selected.push(index + 1)
        }
      }
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
