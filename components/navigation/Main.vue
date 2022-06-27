<template>
  <nav>
    <NavigationSidebar
      v-if="isDesktop"
      :items="items"
      class="hidden-sm-and-down"
    />
    <NavigationBottom
      v-else
      :items="items"
      class="hidden-md-and-up"
    />
  </nav>
</template>

<script>
export default {
  name: 'NavigationMain',
  data: () => ({
    items: [
      {
        name: 'Home',
        icon: 'mdi-home',
        event: 'tab_home',
        route: '/'
      },
      {
        name: 'Search',
        icon: 'mdi-magnify',
        event: 'tab_search',
        route: '/search',
        staticIcon: true
      },
      {
        name: 'People',
        icon: 'mdi-account',
        event: 'tab_people',
        route: '/people'
      },
      {
        name: 'Startups',
        icon: 'mdi-account-multiple',
        event: 'tab_startup',
        route: '/startups'
      },
      {
        name: 'More',
        icon: 'mdi-dots-horizontal-circle',
        event: 'tab_more',
        route: '/more'
      }
    ]
  }),
  computed: {
    isDesktop () {
      const desktop = ['md', 'lg', 'xl']
      return desktop.includes(this.$vuetify.breakpoint.name)
    }
  },
  mounted () {
    if (this.$settings.peopleText) {
      this.items[2].name = this.$settings.peopleText
    }
    if (this.$settings.startupsText) {
      this.items[3].name = this.$settings.startupsText
    }
    if (this.$settings.moreText) {
      this.items[4].name = this.$settings.moreText
    }
  }
}
</script>
