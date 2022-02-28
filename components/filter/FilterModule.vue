<template>
  <v-card elevation="0">
    <v-card-text>
      <h2 v-if="title" class="text-h6 mb-2">
        {{ title }}
      </h2>

      <v-chip-group
        v-model="selected"
        column
        multiple
        active-class="primary--text"
      >
        <v-chip
          v-for="tag in tags"
          :key="tag.id"
          filter
          outlined
          class="ma-1"
        >
          {{ tag.name }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    selected: []
  })
}
</script>
