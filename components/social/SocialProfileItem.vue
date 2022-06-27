<template>
  <v-list-item
    :href="link"
    target="_blank"
    @click="track"
  >
    <v-list-item-icon>
      <v-icon color="#757575">
        {{ platform.icon }}
      </v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>{{ platform.name }}</v-list-item-title>
      <!-- <v-list-item-subtitle>@CodingCarlos</v-list-item-subtitle> -->
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    platform: {
      type: Object,
      default: () => ({})
    },
    link: {
      type: String,
      default: ''
    }
  },
  methods: {
    track () {
      const event = {
        action: 'social',
        label: this.platform.field
      }

      // Set the category based on the current screen
      const screen = this.$store.state.aside.current
      if (screen === 'person') {
        event.category = 'person_detail'
      } else if (screen === 'startup') {
        event.category = 'startup_detail'
      }

      this.$store.dispatch('track/event', event)
    }
  }
}
</script>
