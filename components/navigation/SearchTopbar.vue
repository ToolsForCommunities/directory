<template>
  <div class="sticky-topbar">
    <v-app-bar
      color="white"
      flat
      extended
    >
      <!-- <v-btn
        icon
        @click="$store.dispatch('aside/clear')"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn> -->

      <v-text-field
        v-model="search"
        prepend-inner-icon="search"
        hide-details
        flat
        solo
        clearable
        class="search-box ml-1"
        :placeholder="searchPlaceholder"
        @keyup="trackSearch(search)"
        @click:clear="searchClear()"
      />

      <v-btn
        small
        text
        class="btn-labeled py-7 px-2 ml-3"
        @click="$store.dispatch('aside/clear')"
      >
        <div>
          <v-icon>mdi-tune</v-icon>
          <!-- <v-badge
            inline
            content="2"
          >
          </v-badge> -->
        </div>
        <span>Filters</span>
        <!-- <v-badge
            inline
            content="2"
          >
          </v-badge> -->
      </v-btn>

      <template slot="extension">
        <slot name="extension" />
      </template>
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
}

  .search-box >>> .v-input__control > .v-input__slot {
    background-color: inherit;
  }

.btn-labeled >>> .v-btn__content {
  display: flex;
  flex-direction: column;
  text-transform: none;
}
</style>
