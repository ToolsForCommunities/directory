<template>
  <div>
    <v-chip
      v-for="tag in tags"
      :key="tag.id"
      filter
      outlined
      class="ma-1"
    >
      {{ tag.name }}
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>
