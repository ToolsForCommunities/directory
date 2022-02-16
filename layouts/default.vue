<template>
  <v-app>
    <!-- Show skeleton while app is hydratated -->
    <transition name="fade">
      <SkeletonLayout v-if="loading" />
    </transition>

    <!-- Alert/cookies -->
    <v-alert
      text
      color="info"
      class="mb-0"
    >
      <v-row
        align="center"
        no-gutters
        class="justify-space-between"
      >
        <v-col class="col-12 col-md-6 mb-4 mb-lg-0">
          <!-- <h3 class="text-h5">
            Take a minute to review your privacy settings
          </h3> -->
          <span>Community Tools tracks some of the actions users take inside our products to understand how they use them with a technology called "cookies". You can configure how these cookies work, accept or reject all.</span>
        </v-col>
        <!-- <v-spacer></v-spacer> -->
        <v-col class="shrink">
          <div class="d-flex flex-row">
            <CTButton
              color="info"
              outlined
              class="mr-2"
            >
              Reject all
            </CTButton>
            <CTButton
              color="info"
              outlined
              class="mr-2"
            >
              Configure
            </CTButton>
            <CTButton
              color="info"
              outlined
            >
              Accept all
            </CTButton>
          </div>
        </v-col>
      </v-row>
    </v-alert>
    <!-- Alert/cookies -->

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
