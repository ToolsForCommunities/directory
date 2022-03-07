<template>
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
          {{ heading }}
        </v-card-title>
        <v-card-subtitle
          class="px-0"
          :class="{ 'collapsed': !expanded }"
          v-html="text"
        />

        <v-card-actions class="ma-0 pa-0">
          <v-btn
            text
            plain
            class="pa-0"
            color="primary"
            @click="expandToggle()"
          >
            {{ expanded ? 'Read less' : 'Read more' }}
          </v-btn>
        </v-card-actions>
      </div>

      <v-avatar
        tile
        size="124"
        color="grey"
        class="d-sm-flex ml-md-4 mb-2 mb-md-0"
      >
        <v-img :src="pic" />
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    pic: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    expanded: false
  }),
  methods: {
    expandToggle () {
      this.expanded = !this.expanded
      this.$store.dispatch('track/event', {
        action: this.expanded ? 'news_read_more' : 'news_read_less',
        category: 'home'
      })
    }
  }
}
</script>

<style scoped>
.v-card {
  margin-bottom: 8px;
}

.collapsed {
  max-height: 100px;
  overflow: hidden;
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
</style>
