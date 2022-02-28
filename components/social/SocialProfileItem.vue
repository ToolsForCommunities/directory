<template>
  <v-list-item
    :href="link"
    target="_blank"
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
  }
}
</script>
