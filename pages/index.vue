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

            <PersonCardList :people="newcommers" />

            <v-card-actions class="d-flex justify-center">
              <nuxt-link to="people">
                <CTButton
                  text
                  to="people"
                  nuxt
                >
                  See all
                </CTButton>
              </nuxt-link>
            </v-card-actions>
          </div>
        </div>
      </v-card>

      <v-divider />

      <v-card
        class="pa-4 mb-0"
        flat
      >
        <div class="d-flex flex-column-reverse flex-md-row flex-no-wrap justify-space-between">
          <div>
            <div class="text-overline">
              News
            </div>
            <v-card-title class="px-0 pt-0">
              Waze founder visiting the space
            </v-card-title>
            <v-card-subtitle class="px-0">
              Tomorrow at 13:30 Uri Levine will visit our Cafe space for a quick fireside chat with the community
            </v-card-subtitle>

            <v-card-actions class="ma-0 pa-0">
              <CTButton
                text
                class="pa-0"
              >
                Read more
              </CTButton>
            </v-card-actions>
          </div>

          <v-avatar
            tile
            size="124"
            color="grey"
            class="d-sm-flex ml-md-4 mb-2 mb-md-0"
          >
            <v-img src="https://jewishbusinessnews.com/wp-content/uploads/2013/06/uri-levine.jpg" />
          </v-avatar>
        </div>
      </v-card>

      <v-divider />

      <v-card
        class="pa-4 mb-0"
        flat
      >
        <div class="d-flex flex-column-reverse flex-md-row flex-no-wrap justify-space-between">
          <div>
            <div class="text-overline">
              News
            </div>
            <v-card-title class="px-0 pt-0">
              SER acquires Vostok 6 podcast
            </v-card-title>
            <v-card-subtitle class="px-0">
              The podcast that was created in this space is now on the national radio. Congrats team!
            </v-card-subtitle>
          </div>

          <v-avatar
            tile
            size="124"
            color="grey"
            class="d-sm-flex ml-md-4 mb-2 mb-md-0"
          >
            <v-img src="http://static-1.ivoox.com/canales/5/5/3/3/5533eafd2ae231698df95a8c79764cd8_XXL.jpg" />
          </v-avatar>
        </div>
      </v-card>

      <v-divider />
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
  head: {
    title: 'Home',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Your community, connected'
      }
    ]
  },
  computed: {
    newcommers () {
      return this.$store.state.people.list.slice(10, 13)
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

@media screen  and (max-width: 959px) {
  .v-avatar {
    width: 100% !important;
    height: 56vw !important;
  }
}
</style>
