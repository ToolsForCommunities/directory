<template>
  <v-row>
    <v-col md="2" class="d-flex align-center">
      <!-- <img :src="logo" class="logo" :title="title"> -->
      Community Tools
    </v-col>

    <v-col>
      <v-text-field
        v-model="search"
        prepend-inner-icon="search"
        hide-details
        flat
        solo
        clearable
        color="#F5F5F5"
        class="search-box"
        :placeholder="searchPlaceholder"
        @keyup="trackSearch(search)"
        @click:clear="searchClear()"
        @click="goToSearchMenu"
      />
    </v-col>

    <v-col md="auto" class="text-xs-center">
      <v-btn
        large
        color="primary"
        href="/admin/#/suggest-public"
        target="_blank"
        class="elevation-0"
      >
        <v-icon left>
          add
        </v-icon>Add Profile
      </v-btn>
    </v-col>

    <v-col md="auto" class="text-xs-center">
      <!-- perfil -->
      <!-- <profile-icon-dropdown /> -->
      <v-avatar />
    </v-col>
  </v-row>
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
    title () {
      return this.config.title || 'Directory'
    },
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
      // if (!this.hasSearch) {
      //   this.$router.push({ name: 'people' })
      // }
      console.log('Navigate to search')
    }
  }
  // created() {
  //   this.$store.dispatch('tags/getTags');
  // },
}
</script>
