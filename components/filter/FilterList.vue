<template>
  <v-sheet v-if="tags.length > 0">
    <v-chip-group
      multiple
      active-class="primary--text"
    >
      <v-chip @click="$store.dispatch('aside/set', 'filters')">
        {{ $t('filters.all') }}
        <!-- All filters -->
      </v-chip>
      <v-chip
        v-for="tag in tags"
        :key="tag.id"
      >
        {{ tag.name }}
      </v-chip>
    </v-chip-group>
  </v-sheet>
</template>

<script type="text/javascript">
export default {
  props: {
    for: {
      type: String,
      default: 'all'
    }
  },
  fetch () {
    return this.$store.dispatch('tag/list')
  },
  computed: {
    tags () {
      const list = this.$store.state.tag.list

      if (this.for.toLowerCase() === 'all') {
        return list
      }

      return list.filter(item => item.for.includes(this.for)) || []
    }
  }
}
</script>
