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
        @click="openFilters"
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
  this.$store.dispatch('track/event', {
    category: 'search',
    action: 'search_open'
  })
}

function searchClear () {
  this.$store.dispatch('track/event', {
    category: 'search',
    action: 'search_clear'
  })
}

function trackSearch (search) {
  this.$store.dispatch('track/event', {
    category: 'search',
    action: 'search_type',
    label: search
  })
}

export default {
  data: () => ({
    search: ''
  }),
  computed: {
    searchPlaceholder () {
      return this.$settings.searchPlaceholder || 'Try RatedPower, Andrea or UX'
    }
  },
  watch: {
    search (value) {
      this.$emit('search', value)
    }
  },
  methods: {
    searchOpen,
    searchClear,
    trackSearch,
    openFilters (name) {
      this.$store.dispatch('aside/set', 'filters')

      this.$store.dispatch('track/event', {
        category: 'search',
        action: 'all_filters'
      })
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

@media screen  and (max-width: 956px) {

  .search-box {
    height: 40px;
  }
  >>> .v-text-field.v-text-field--solo .v-input__control {
    min-height: 40px;
  }

}
</style>
