<template>
  <div class="aside-card ma-md-4 ma-0 mb-0">
    <v-toolbar
      dense
      flat
      color="white"
    >
      <!-- nuxt-link
        :to="{ query: {} }" -->
      <v-btn
        icon
        @click="$store.dispatch('aside/clear')"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title class="pl-2">
      </v-toolbar-title>

      <v-spacer />

      <v-menu
        bottom
        left
      >
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>Edit</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Report</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Share</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-divider />

    <div class="pa-4 lateral-scrollable">
      <!-- <p>{{ $store.state.aside }}</p> -->

      <!-- Content -->
      <div>
        <!-- Picture -->
        <v-img
          aspect-ratio="1"
          src="https://storage.googleapis.com/gfs-directory/pic/o/1/o1s0uUB_CLM4v1UsFXshT.png"
          class="rounded"
        />
        <!-- /Picture -->
        <!-- Info -->
        <div>
          <!-- Name -->
          <v-card-title
            class="pb-0 pt-2 pa-0 ma-0 text-center d-block text-truncate"
            title="Sheetgo"
          >
            Sheetgo
          </v-card-title>
          <!-- /Name -->
          <!-- Job description -->
          <v-card-text class="pa-0 ma-0 text-center">
            <div class="subtitle-1">
              <span>
                Your spreadsheets, 10x the scalability
              </span>
            </div>
          </v-card-text>
          <!-- /Job description -->
          <!-- Connect CTA -->
          <div class="text-center">
            <CTButton
              text
              class="my-4"
            >
              <span>sheetgo.com</span>
              <v-icon right>
                mdi-open-in-new
              </v-icon>
            </CTButton>
          </div>
          <!-- /Connect CTA -->
          <!-- About -->
          <div class="py-4">
            <span class="subtitle-1">About Sheetgo</span>
            <!-- Bio -->
            <div class="body-2">
              <span>
                Build fast and reliable workflows using the tools you already know.
              </span>
            </div>
            <!-- /Bio -->
            <!-- Chips -->
            <v-chip-group
              v-model="amenities"
              column
              multiple
              class="pt-2"
            >
              <v-chip
                filter
                outlined
              >
                <v-icon left color="#757575">
                  mdi-map-marker
                </v-icon>
                Madrid / Floor 2
              </v-chip>
              <v-chip
                filter
                outlined
              >
                <v-icon left color="#757575">
                  mdi-account-group
                </v-icon>
                Tetuan Valley
              </v-chip>
              <v-chip
                filter
                outlined
              >
                <v-icon left color="#757575">
                  mdi-calendar
                </v-icon>
                Member since 2015
              </v-chip>
            </v-chip-group>
            <!-- /Chips -->
          </div>
          <!-- /About -->
          <v-divider />
          <!-- Help -->
          <div class="py-4">
            <span class="subtitle-1">Verticals</span>
            <v-chip-group
              v-model="amenities"
              column
              multiple
            >
              <v-chip
                filter
                outlined
              >
                Advertising
              </v-chip>
              <v-chip
                filter
                outlined
              >
                Automotive
              </v-chip>
              <v-chip
                filter
                outlined
              >
                Blockchain
              </v-chip>
            </v-chip-group>
            <!-- <CTButton
              primary
              text
              class="mt-2"
            >
              Ask for help
            </CTButton> -->
          </div>
          <!-- /Help -->
          <v-divider />
          <!-- Team -->
          <div class="py-4">
            <span class="subtitle-1">Team</span>
            <v-list>
              <!-- Component starts here -->
              <v-list-item>
                <v-list-item-avatar>
                  <v-img src="https://codingcarlos.com/wp-content/uploads/2017/07/epic-yo-600x600.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Carlos Hernández</v-list-item-title>
                  <v-list-item-subtitle>Lead Barbudo</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <!-- Component ends here -->
              <v-list-item>
                <v-list-item-avatar>
                  <v-img src="https://codingcarlos.com/wp-content/uploads/2017/07/epic-yo-600x600.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Ivo Vilches</v-list-item-title>
                  <v-list-item-subtitle>Lead Gafotas</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img src="https://codingcarlos.com/wp-content/uploads/2017/07/epic-yo-600x600.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Olga Salas</v-list-item-title>
                  <v-list-item-subtitle>Lead Culona</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <CTButton text>View 3 more</CTButton>
          </div>
          <!-- /Team -->
          <v-divider />
          <!-- Social -->
          <div class="py-4">
            <span class="subtitle-1">Social</span>
            <v-list>
              <!-- Component starts here -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="#757575">
                    mdi-twitter
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Twitter</v-list-item-title>
                  <v-list-item-subtitle>@CodingCarlos</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <!-- Component ends here -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="#757575">
                    mdi-facebook
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Facebook</v-list-item-title>
                  <v-list-item-subtitle>Carlos Hernández</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
          <!-- /Social -->
        </div>
        <!-- /Info -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.aside-card {
  border:  1px solid var(--v-grey-base);
  /*border:  1px solid var(--v-grey-lighten1);*/
}

.aside-card,
.aside-card .v-toolbar {
  border-radius: 8px;
}

.lateral-scrollable {
  max-height: calc(100vh - 48px - 32px);
  overflow-y: scroll;
}

@media screen and (max-width: 959px) {

  /* removes border from profile view in mobile */
  /* should be a global class for other views like filters */
  .aside-card {
    border-radius: none;
    border: none;
  }

}

</style>
