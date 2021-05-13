<template>
  <div class="sticky-topbar">
    <v-app-bar
      color="white"
      flat
    >
      <!-- absolute -->
      <h1>
        {{ title }}
      </h1>

      <v-spacer />

      <v-text-field
        v-model="search"
        prepend-inner-icon="search"
        hide-details
        flat
        solo
        clearable
        class="search-box"
        :placeholder="searchPlaceholder"
        @keyup="trackSearch(search)"
        @click:clear="searchClear()"
        @click="goToSearchMenu"
      />
    </v-app-bar>
    <v-divider style="position: absolute; width: 100%" />
  </div>
</template>

<script>
// import SiteLogo from '@/components/SiteLogo.vue'
// import ProfileIconDropdown from '@/components/ProfileIconDropdown.vue'

function searchOpen () {
  this.searching = true
  this.$ga.event('search', 'search_open')
}

function searchClose () {
  this.searching = false
  this.$ga.event('search', 'search_back')
}

function searchClear () {
  this.$ga.event('search', 'search_clear')
}

function trackSearch (search) {
  this.$ga.event('search', 'search_type', search)
}

export default {
  name: 'Tabs',
  // components: {
  //   SiteLogo,
  //   ProfileIconDropdown
  // },
  props: {
    title: {
      type: String,
      default: 'Directory'
    }
  },
  data: () => ({
    searching: false,
    tabs: 'tabs-home',
    search: '',
    tagFilter: [],
    allFilters: false,
    dialog: false,
    tabClicked: null
  }),
  head: {
    title () {
      return {
        inner: 'Directory'
      }
    }
  },
  computed: {
    config () {
      return this.$settings
    },
    tagTab () {
      return this.$route.name
    },
    tagList () {
      const tags = this.$store.getters['tags/getByTarget'](this.tagTab) || []
      return tags
    },
    hasFilters () {
      const hasFilters = this.tagList.length > 0
      return hasFilters
    },
    hasSearch () {
      const searchTabs = ['people', 'startups']
      const tab = this.tagTab || ''
      const hasSearch = (searchTabs.includes(tab))
      return hasSearch
    },
    tagTabFilter () {
      const tags = this.tagList.map(item => item.name)
      return this.tagFilter.filter(item => tags.includes(item))
    },
    // title () {
    //   return this.config.title || 'Directory'
    // },
    logo () {
      return this.config.logo || '/img/logo.png'
    },
    searchPlaceholder () {
      return 'Try RatedPower, Andrea or UX'
      // return this.config.searchPlaceholder || 'Try RatedPower, Andrea or UX'
    }
  },
  methods: {
    searchOpen,
    searchClose,
    searchClear,
    trackSearch,
    switchTag (name) {
      const index = this.tagFilter.indexOf(name)
      if (index === -1) {
        this.tagFilter.push(name)
        this.$ga.event('list_people', 'filter_add', name)
      } else {
        this.tagFilter.splice(index, 1)
        this.$ga.event('list_people', 'filter_remove', name)
      }
    },
    goToSearchMenu () {
      this.$router.push('search')
    }
  }
}
</script>

<style scoped>
.sticky-topbar {
  position: sticky;
  top: 0px;
  z-index: 1;
}

.search-box {
  border-radius: 24px;
  background-color: rgba(33, 33, 33, .08);
  max-width: 240px;
}
/*.tççheme--light.v-text-field--solo > .v-input__control > .v-input__slot*/
  .search-box >>> .v-input__control > .v-input__slot {
    background-color: inherit;
  }
</style>
