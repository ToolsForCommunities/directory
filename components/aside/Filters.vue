<template>
  <div>
    <v-card outlined class="ma-0 ma-md-4">
      <!-- Toolbar -->
      <v-toolbar
        flat
        dense
      >
        <v-btn
          icon
          @click="$store.dispatch('aside/clear')"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title>Filters</v-toolbar-title>

        <v-spacer />

        <CTButton
          text
        >
          Clear all
        </CTButton>
      </v-toolbar>
      <v-divider />
      <!-- /Toolbar -->

      <div class="mx-4">
        <!-- Programs -->
        <FilterModule
          v-if="hasProgram"
          :tags="programs"
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
          title="Todos los filtros"
          @change="setUncategorizedFilters"
        />
        <!-- /All filters -->
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    activePrograms: [],
    locationFilter: [],
    uncategorizedFilters: [],
    categoryFilters: {},
    allCategoryFilters: []
  }),
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
      console.log(selected.map(item => item.name))
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

      // And upate the search filters
      this.setFilters()
    },
    setFilters () {
      // Get currently selected
      const selected = [
        ...this.uncategorizedFilters,
        ...this.allCategoryFilters
      ]

      return this.$store.dispatch(`${this.filterSource}/setFilters`, selected)
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
