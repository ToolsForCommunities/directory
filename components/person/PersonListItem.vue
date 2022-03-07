<template>
  <v-list-item
    :to="`?aside=person/${id}`"
    nuxt
    @click.native="track()"
  >
    <v-list-item-avatar>
      <v-img :src="pic || '/img/nopic.png'" />
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>{{ name }}</v-list-item-title>
      <v-list-item-subtitle>{{ role }}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    pic: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      default: ''
    }
  },
  methods: {
    track () {
      const event = {
        action: 'view_person',
        category: 'person_list',
        label: this.id
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
