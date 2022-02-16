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

      <v-toolbar-title class="pl-2 text-truncate">
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
          src="https://codingcarlos.com/wp-content/uploads/2017/07/epic-yo-600x600.jpg"
          class="rounded"
        />
        <!-- /Picture -->
        <!-- Info -->
        <div>
          <!-- Name -->
          <v-card-title
            class="pb-0 pt-2 pa-0 ma-0 text-center d-block"
            title="Carlos Hernadez Martin"
          >
            Carlos Hernandez Martin
          </v-card-title>
          <!-- /Name -->
          <!-- Job description -->
          <v-card-text class="pa-0 ma-0 text-center">
            <div class="subtitle-1">
              <span>
                Tech Founder <span>at</span>
                <nuxt-link to="?aside=startup/1">
                  Community Tools
                </nuxt-link>
              </span>
            </div>
          </v-card-text>
          <!-- /Job description -->
          <!-- Connect CTA -->
          <div class="text-center">
            <CTButton
              primary
              class="my-4"
            >
              Slack
            </CTButton>
            <CTButton
              primary
              class="my-4"
            >
              Mail
            </CTButton>
          </div>
          <!-- /Connect CTA -->
          <!-- About -->
          <div class="py-4">
            <span class="subtitle-1">About Carlos</span>
            <!-- Bio -->
            <div class="body-2">
              <span>
                Showman, barbudo, liante, developer y contador de cuentos. Conecto gente en @ToolsCommunity. Charlo en @commitsans, @os_weekends y @AbrimosMelon. Tengo tierras.
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
            <span class="subtitle-1">Knowledge areas</span>
            <v-chip-group
              v-model="amenities"
              column
              multiple
            >
              <v-chip
                filter
                outlined
              >
                Development
              </v-chip>
              <v-chip
                filter
                outlined
              >
                Sales
              </v-chip>
              <v-chip
                filter
                outlined
              >
                Beard Care
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
          <!-- Help -->
          <div class="pb-4">
            <span class="subtitle-1">Needs help with</span>
            <v-chip-group
              v-model="amenities"
              column
              multiple
            >
              <v-chip
                filter
                outlined
              >
                UX
              </v-chip>
              <v-chip
                filter
                outlined
              >
                UI Design
              </v-chip>
              <v-chip
                filter
                outlined
              >
                Interior Design
              </v-chip>
            </v-chip-group>
            <div class="pt-2">
              <CTButton
                primary
                text
              >
                Ask for help
              </CTButton>
              <CTButton
                primary
                text
              >
                Help Carlos
              </CTButton>
            </div>
          </div>
          <!-- /Help -->
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
