<template>
  <v-app>
    <!-- Show skeleton while app is hydratated -->
    <transition name="fade">
      <SkeletonLayout v-if="loading" />
    </transition>

    <CookiesBanner />

    <CTLayoutMain :hide-aside="hideAside">
      <NavigationMain slot="sidebar" />

      <div slot="content">
        <nuxt />
      </div>

      <div slot="aside" class="aside">
        <AsideRouter />
      </div>
    </CTLayoutMain>

    <AlertBar />
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
  data: () => ({
    loading: true
  }),
  computed: {
    hideAside () {
      const isDesktop = checkIsDesktop(this.$vuetify.breakpoint.name)
      return !isDesktop && !this.$store.state.aside.current
    }
  },
  mounted () {
    this.loading = false
  }
}
</script>

<style>
/* Fade transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
