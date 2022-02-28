<template>
  <AsideCard>
    <!-- Toolbar -->
    <template slot="toolbar">
      <AsideNavigationFilter
        @clear="clearAll"
      />
    </template>
    <!-- /Toolbar -->

    <!-- Programs -->
    <FilterModule
      v-if="hasProgram"
      :tags="programs"
      :initial="activePrograms"
      title="Programs"
      @change="setPrograms"
    />
    <!-- /Programs -->

    <v-divider />

    <!-- Locations -->
    <!-- <FilterModule
      :tags="locations"
      title="Locations"
    /> -->
    <!-- /Locations -->

    <v-divider />

    <!-- Tag Categories -->
    <div v-if="tagCategories.length > 0">
      <div
        v-for="tagsCategory in tagCategories"
        :key="tagsCategory.name"
      >
        <FilterModule
          :tags="tagsCategory.tags"
          :title="tagsCategory.name"
          :initial="selectedTags"
          @change="(selected) => setCategoryFilters(tagsCategory.name, selected)"
        />
      </div>
    </div>
    <!-- /Tag Categories -->

    <v-divider />

    <!-- All filters -->
    <FilterModule
      :tags="tags"
      :initial="selectedTags"
      title="All filters"
      @change="setUncategorizedFilters"
    />
    <!-- /All filters -->
  </AsideCard>
</template>

<script>
import getViewCategory from '@/assets/js/helpers/getViewCategory'

export default {
  data: () => ({
    activePrograms: [],
    locationFilter: [],
    uncategorizedFilters: [],
    categoryFilters: {},
    allCategoryFilters: []
  }),
  fetch () {
    return this.$store.dispatch('tag/list')
  },
  computed: {
    page () {
      const defaultTab = 'people'
      let name = this.$route.name

      if (name.toLowerCase().includes('search')) {
        name = this.$route.query.tab || defaultTab
      }

      if (name.toLowerCase().includes('people')) {
        return 'people'
      }

      if (name.toLowerCase().includes('startup')) {
        return 'startups'
      }

      return 'all'
    },
    filterSource () {
      // Select the page to filter in
      let filterSource = this.page
      if (this.for === 'all') {
        filterSource = 'search'
      }

      return filterSource
    },
    tags () {
      return this.$store.getters['tag/getByTarget'](this.page)
    },
    selectedTags () {
      if (this.filterSource === 'all') {
        return []
      }

      return this.$store.state[this.filterSource].filters
    },
    hasProgram () {
      return this.$settings.hasProgram && this.$settings.programOptions
    },
    programs () {
      const programs = this.$settings.programOptions
      if (programs) {
        return programs.split(',').map((item) => {
          return {
            id: item,
            name: item,
            active: this.activePrograms.includes(item) > -1
          }
        })
      }

      return []
    },
    locations () {
      const locations = this.$store.state.people.list
        .flatMap((item) => {
          const location = (item && item.location) || ''

          if (location.includes('/') > -1) {
            return location.split('/')
          } else if (location.includes(';') > -1) {
            return location.split(';')
          }

          return [location]
        })
        .filter(item => !!item)
        .sort()

      // Remove duplicates
      return Array.from(new Set(locations).map(item => ({ name: item, id: item })))
    },
    // ToDo: Refactor this three computed props to avoid code duplication
    startupTagCategories () {
      if (!this.$settings.startupTagCategories || this.$settings.startupTagCategories.length === 0) {
        return []
      }

      const categories = this.$settings.startupTagCategories.split(',')
      return this.makeTagCategories(categories)
    },
    personTagCategories () {
      if (!this.$settings.personTagCategories || this.$settings.personTagCategories.length === 0) {
        return []
      }

      const categories = this.$settings.personTagCategories.split(',')
      return this.makeTagCategories(categories)
    },
    tagCategories () {
      // let categories = ''
      if (this.page === 'startups') {
        return this.startupTagCategories
      } else if (this.page === 'people') {
        return this.personTagCategories
      } else {
        return []
      }
    }
  },
  methods: {
    makeTagCategories (categories) {
      return categories.map(categoryName => ({
        name: categoryName,
        tags: this.tagsByCategory(categoryName)
      })).filter(category => category.tags.length > 0)
    },
    tagsByCategory (category, onlyUncategorized) {
      // Has no tags
      if (!this.tags) {
        return []
      }

      if (onlyUncategorized) {
        return this.tags.filter(tag => !tag.category)
      }

      // No category defined, return all tags
      if (!category) {
        return this.tags
      }

      return this.tags.filter((tag) => {
        return tag.category && tag.category.toUpperCase() === category.toUpperCase()
      })
    },
    setPrograms (selected) {
      this.$store.dispatch('track/event', {
        action: 'filter',
        category: getViewCategory(this.$route.name.split('__')[0]),
        label: 'programs',
        value: selected.length
      })

      return this.$store.dispatch(`${this.filterSource}/setPrograms`, selected.map(item => item.name))
    },
    setUncategorizedFilters (selected) {
      this.uncategorizedFilters = selected
      this.setFilters()
    },
    setCategoryFilters (category, selected) {
      // Store selected filters for this category
      this.categoryFilters[category] = selected || []

      // Set a plain array with all the tags selected
      const keys = Object.keys(this.categoryFilters)
      let allCategoryFilters = []
      for (const i in keys) {
        allCategoryFilters = [
          ...allCategoryFilters,
          ...this.categoryFilters[keys[i]]
        ]
      }
      this.allCategoryFilters = allCategoryFilters

      // And update the search filters
      this.setFilters()
    },
    setFilters () {
      // Get currently selected
      const selected = [
        ...this.uncategorizedFilters,
        ...this.allCategoryFilters
      ]

      this.$store.dispatch('track/event', {
        action: 'filter',
        category: getViewCategory(this.$route.name.split('__')[0]),
        label: 'tags',
        value: selected.length
      })
      return this.$store.dispatch(`${this.filterSource}/setFilters`, selected)
    },
    clearAll () {
      this.activePrograms = []
      this.locationFilter = []
      this.uncategorizedFilters = []
      this.allCategoryFilters = []
      this.categoryFilters = {}

      this.$store.dispatch('track/event', {
        action: 'clear_filters',
        category: getViewCategory(this.$route.name.split('__')[0])
      })

      return this.$store.dispatch(`${this.filterSource}/clearFilters`)
    }
  }
}
</script>

<style scoped>

@media screen and (max-width: 959px) {
  .v-card {
    border: none;
  }
}
</style>
