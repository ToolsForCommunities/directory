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
        />
        <!-- /Programs -->

        <v-divider />

        <!-- Locations -->
        <FilterModule
          :tags="locations"
          title="Locations"
        />
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
            />
          </div>
        </div>
        <!-- /Tag Categories -->

        <v-divider />

        <!-- All filters -->
        <FilterModule
          :tags="$store.state.tag.list"
          title="Todos los filtros"
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
    tagFilter: []
  }),
  computed: {
    page () {
      const name = this.$route.name

      if (name.toLowerCase().includes('people')) {
        return 'people'
      }

      if (name.toLowerCase().includes('startup')) {
        return 'startups'
      }

      return 'all'
    },
    tags () {
      return this.$store.getters['tag/getByTarget'](this.for)
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
