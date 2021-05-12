<template>
  <v-app>
    <CTLayoutMain :hide-aside="hideAside">
      <NavigationMain slot="sidebar" />

      <div slot="content">
        <nuxt />
      </div>

      <div slot="aside" class="aside">
        <AsideRouter />
      </div>
    </CTLayoutMain>
  </v-app>
</template>

<script>
function checkIsDesktop (breakpoint) {
  return ['md', 'lg', 'xl'].includes(breakpoint)
}

export default {
  name: 'DefaultLayout',
  middleware ({ store, route, $vuetify }) {
    const isDesktop = checkIsDesktop($vuetify.breakpoint.name)

    if (route && route.query && route.query.aside) {
      store.dispatch('aside/set', route.query.aside)
    } else if (!isDesktop) {
      store.dispatch('aside/clear')
    }
  },
  computed: {
    hideAside () {
      const isDesktop = checkIsDesktop(this.$vuetify.breakpoint.name)
      return !isDesktop && !this.$store.state.aside.current
    }
  }
}
</script>
