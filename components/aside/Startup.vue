<template>
  <AsideCard>
    <!-- Toolbar -->
    <template slot="toolbar">
      <AsideNavigationMain>
        <template slot="options">
          <v-btn
            icon
            :href="`/admin/#/suggest-startup-public/${startup.id}`"
            target="_blank"
          >
            <v-icon>edit</v-icon>
          </v-btn>
        </template>
      </AsideNavigationMain>
    </template>

    <!-- Content -->
    <!-- Picture -->
    <v-img
      aspect-ratio="1"
      :src="startup.logo || '/img/nologo.png'"
    />
    <!-- /Picture -->
    <!-- Info -->
    <div class="px-4 px-md-0">
      <!-- Name -->
      <v-card-title
        class="startup-name pb-1 pt-3 px-0 ma-0 text-center d-block"
        :title="startup.name"
      >
        {{ startup.name }}
      </v-card-title>
      <!-- /Name -->

      <!-- Connect CTA -->
      <div class="text-center">
        <a
          :href="startup.website"
          target="_blank"
        >
          <CTButton
            outline
            class="my-2"
            @click="$store.dispatch('track/event', { action: 'website', category: 'startup_detail', label: startup.id })"
          >
            <span>{{ startup.website }}</span>
            <v-icon right>
              mdi-open-in-new
            </v-icon>
          </CTButton>
        </a>
      </div>
      <!-- /Connect CTA -->

      <!-- About -->
      <div class="py-4">
        <span class="subtitle-1">About {{ startup.name }}</span>
        <!-- Bio -->
        <div class="body-2">
          <span>
            {{ startup.bio }}
          </span>
        </div>
        <!-- /Bio -->

        <!-- Chips -->
        <div class="mt-4">
          <!-- Location -->
          <v-chip
            v-if="$settings.hasLocation && startup.location"
            outlined
            class="my-1 mr-2"
          >
            <v-icon small left color="#757575">
              mdi-map-marker
            </v-icon>
            {{ startup.location }}
          </v-chip>

          <!-- Programs -->
          <!-- Program -->
          <span v-if="$settings.hasProgram && startup.program">
            <v-chip
              v-for="program in startup.program.split(',')"
              :key="program"
              outlined
              class="my-1 mr-2"
            >
              <v-icon small left color="#757575">
                mdi-account-group
              </v-icon>
              {{ program }}
            </v-chip>
          </span>

          <!-- Member since -->
          <!-- <v-chip
            v-if="$settings.hasMembership && startup.joinedAt"
            filter
            outlined
          >
            <v-icon left color="#757575">
              mdi-calendar
            </v-icon>
            Member since 2015
          </v-chip> -->
        </div>
        <!-- /Chips -->
      </div>
      <!-- /About -->

      <v-divider />

      <!-- Tags -->
      <div v-if="tags && tags.length > 0" class="py-4">
        <span class="subtitle-1">Tags</span>
        <TagList :tags="tags" />
      </div>
      <!-- /Tags -->

      <!-- Custom Tags -->
      <div v-if="tags && tags.length > 0">
        <div
          v-for="tagsCategory in tagCategories"
          :key="tagsCategory.name"
          class="py-4"
        >
          <span class="subtitle-1">
            {{ tagsCategory.name }}
          </span>
          <TagList :tags="tagsCategory.tags" />
        </div>
      </div>
      <!-- /Custom Tags -->

      <v-divider />

      <!-- Team -->
      <div v-if="startup.persons" class="py-4">
        <span class="subtitle-1">Team</span>
        <PersonList :people="startup.persons" />
      </div>
      <!-- /Team -->

      <v-divider />

      <!-- Social -->
      <div class="py-4">
        <SocialProfiles :item="startup" />
      </div>
      <!-- /Social -->
    </div>
    <!-- /Info -->
  </AsideCard>
</template>

<script>
export default {
  fetch () {
    const list = this.$store.state.startups.lists
    if (!list || list.length === 0) {
      return this.$store.dispatch('startups/list')
    }

    return Promise.resolve()
  },
  computed: {
    startup () {
      const id = this.$store.state.aside.id
      return this.$store.getters['startups/getById'](id) || {}
    },
    tagCategories () {
      if (!this.$settings.startupTagCategories || this.$settings.startupTagCategories.length === 0) {
        return []
      }

      const categories = this.$settings.startupTagCategories.split(',')

      return categories.map(categoryName => ({
        name: categoryName,
        tags: this.tagsByCategory(categoryName)
      })).filter(category => category.tags.length > 0)
    },
    tags () {
      let onlyUncategorized = false
      if (this.tagCategories.length > 0) {
        onlyUncategorized = true
      }

      return this.tagsByCategory('', onlyUncategorized)
    }
    // --- END REVIEW ---
  },
  methods: {
    // REVIEW THIS CODE!! Is this part of store?
    tagsByCategory (category, onlyUncategorized) {
      // Has no tags
      if (!this.startup.Tag) {
        return []
      }

      if (onlyUncategorized) {
        return this.startup.Tag.filter(tag => !tag.category)
      }

      // No category defined, return all tags
      if (!category) {
        return this.startup.Tag
      }

      return this.startup.Tag.filter((tag) => {
        return tag.category && tag.category.toUpperCase() === category.toUpperCase()
      })
    }
    // --- END REVIEW ---
  }
}
</script>

<style scoped>
.startup-name {
  line-height: 1.25em;
  word-break: break-word;
}
</style>
