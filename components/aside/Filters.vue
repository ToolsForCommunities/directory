<template>
  <div>
    <!-- <v-toolbar
      flat
      color="white"
    >
      <v-toolbar-title class="px-4 font-weight-bold fill-width">
        Assistant
      </v-toolbar-title>
    </v-toolbar> -->

    <v-card outlined class="ma-4">
      <v-toolbar
        flat
        dense
      >
        <v-btn
          icon
          class="d-lg-none d-xl-flex"
          @click="$store.dispatch('aside/clear')"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title>Filters</v-toolbar-title>
        <v-spacer />
        <CTButton
          text
        >
          Clear all
        </CTButton>
      </v-toolbar>
      <v-divider />
      <v-card elevation="0 px-4">
        <v-card-text>
          <h2 class="text-h6 mb-2">
            Program filters
          </h2>

          <v-chip-group
            v-model="amenities"
            column
            multiple
          >
            <v-chip
              filter
              outlined
            >
              Elevator
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Washer / Dryer
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Fireplace
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Wheelchair access
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Dogs ok
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Cats ok
            </v-chip>
          </v-chip-group>
        </v-card-text>
        <v-divider />
        <v-card-text>
          <h2 class="text-h6 mb-2">
            All filters
          </h2>

          <v-chip-group
            v-model="neighborhoods"
            column
            multiple
          >
            <v-chip
              filter
              outlined
            >
              Snowy Rock Place
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Honeylane Circle
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Donna Drive
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Elaine Street
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Court Street
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Kennedy Park
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Snowy Rock Place
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Honeylane Circle
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Donna Drive
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Elaine Street
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Court Street
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Kennedy Park
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Snowy Rock Place
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Honeylane Circle
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Donna Drive
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Elaine Street
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Court Street
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Kennedy Park
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Snowy Rock Place
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Honeylane Circle
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Donna Drive
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Elaine Street
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Court Street
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Kennedy Park
            </v-chip>
          </v-chip-group>
        </v-card-text>

        <!-- <CTButton
          primary
          block
        >
          Apply
        </CTButton> -->
      </v-card>
    </v-card>
  </div>
</template>
