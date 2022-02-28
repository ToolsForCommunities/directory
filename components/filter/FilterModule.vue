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
        @change="change"
      >
        <v-chip
          v-for="tag in showTags"
          :key="tag.id"
          filter
          outlined
          class="ma-1"
        >
          {{ tag.name }}
        </v-chip>
      </v-chip-group>
      <CTButton
        v-if="tags.length > maxTagsCollapsed"
        text
        @click="collapsed = !collapsed"
      >
        See {{ collapsed ? 'more' : 'less'}}
      </CTButton>
    </v-card-text>
  </v-card>
</template>

<script>
import getTagIndex from '@/assets/js/helpers/getTagIndex'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    },
    initial: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    selected: [],
    maxTagsCollapsed: 20,
    collapsed: true
  }),
  computed: {
    showTags () {
      if (this.collapsed) {
        return this.tags.slice(0, this.maxTagsCollapsed)
      }

      return this.tags
    }
  },
  watch: {
    initial () {
      this.setSelected()
    }
  },
  mounted () {
    this.setSelected()
  },
  methods: {
    change () {
      const tags = this.selected.map(i => this.tags[i])
      this.$emit('change', tags)
    },
    setSelected () {
      const selected = this.initial
      this.selected = []

      for (let i = 0; i < selected.length; i++) {
        const index = getTagIndex(this.tags, selected[i])

        if (index > -1) {
          this.selected.push(index)
        }
      }
    }
  }
}
</script>
