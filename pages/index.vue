<template>
  <!-- <div class="ct-container ct-container__has-topbar"> -->
  <div>
    <NavigationMainTopbar
      title="Home"
    />
    <v-container class="pa-0">
      <!-- Alert -->
      <!-- <v-alert
        text
        color="info"
      >
        <h3 class="text-h5">
          Lorem Ipsum
        </h3>
        <div>Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Curabitur turpis.</div>

        <v-divider
          class="my-4 info"
          style="opacity: 0.22"
        ></v-divider>

        <v-row
          align="center"
          no-gutters
        >
          <v-col class="grow">
            Proin magna. Vivamus in erat ut urna cursus vestibulum. Etiam imperdiet imperdiet orci.
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="shrink">
            <v-btn
              color="info"
              outlined
            >
              Okay
            </v-btn>
          </v-col>
        </v-row>
      </v-alert> -->
      <!-- /Alert -->
      <!-- Cards -->
      <v-card
        class="pa-4 pb-2 mb-0"
        flat
      >
        <div class="flex-sm-column-reverse flex-lg-row flex-no-wrap justify-space-between">
          <div>
            <div class="text-overline">
              Community
            </div>
            <v-card-title class="px-0 pt-0">
              New faces in your community
            </v-card-title>
            <v-card-subtitle class="px-0 pr-md-6">
              Remember your first day of school? Was it hard? You wish you had some friends? Then go and befriend these new members!
            </v-card-subtitle>
            <!-- <div class="d-flex" style="width: 100%;"> -->

            <div class="newcommers">
              <PersonCardList :people="newcommers" />
            </div>

            <v-card-actions class="d-flex justify-center">
              <nuxt-link to="people">
                <CTButton
                  text
                  to="people"
                  nuxt
                  @click="$store.dispatch('track/event', { action: 'view_people', category: 'home' })"
                >
                  See all
                </CTButton>
              </nuxt-link>
            </v-card-actions>
          </div>
        </div>
      </v-card>

      <v-divider />

      <!-- Cards -->
      <div
        v-for="item in news"
        :key="item.id"
      >
        <NewsCard v-bind="news" />
        <v-divider />
      </div>
      <!-- /Cards -->

      <!-- After -->
      <div class="d-flex justify-center py-4">
        <span>
          You're up to date. Go have some <a href="https://www.urbandictionary.com/define.php?term=jomo" target="_blank">JOMO</a>.
        </span>
      </div>
      <!-- /After -->
    </v-container>
  </div>
</template>

<script>
export default {
  fetch () {
    return Promise.all([
      this.$store.dispatch('people/list'),
      this.$store.dispatch('startups/list'),
      this.$store.dispatch('news/list')
    ])
  },
  head () {
    return {
      titleTemplate: `%s - ${this.$settings.title}` || '%s - Community Tools',
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Your community, connected'
        }
      ]
    }
  },
  computed: {
    newcommers () {
      return this.$store.state.people.list.slice(10, 13)
    },
    news () {
      return this.$store.state.news.list || []
    }
  }
}
</script>

<style scoped>
.v-card {
  margin-bottom: 8px;
}
.ct-container {
  height: 100vh;
  max-height: 100vh;
  overflow: auto;
}
  .ct-container__has-topbar {
    padding-top: 64px;
  }

/* Add plain to CTButton */

>>> .v-btn--plain .v-btn__content {
  text-transform: none;
}

>>> .v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover) .v-btn__content {
  opacity: 1 ;
  text-transform: none;
}

>>> .v-btn--plain .v-btn__content:hover {
  opacity: .64;
  text-transform: none;
}

/* / */

@media screen  and (max-width: 959px) {
  .v-avatar {
    width: 100% !important;
    height: 56vw !important;
  }
}

@media screen and (max-width: 1264px)  {
  .newcommers >>> .row div:last-child {
    display: none;
  }
}
</style>
