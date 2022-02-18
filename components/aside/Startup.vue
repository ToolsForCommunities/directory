<template>
  <AsideCard>
    <!-- Content -->
    <div>
      <!-- Picture -->
      <v-img
        aspect-ratio="1"
        :src="startup.logo || '/img/nologo.png'"
        class="rounded"
      />
      <!-- /Picture -->
      <!-- Info -->
      <div>
        <!-- Name -->
        <v-card-title
          class="pb-0 pt-2 pa-0 ma-0 text-center d-block text-truncate"
          title="Sheetgo"
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
              text
              class="my-4"
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
          <div>
            <!-- Location -->
            <v-chip
              filter
              outlined
            >
              <v-icon left color="#757575">
                mdi-map-marker
              </v-icon>
              {{ startup.location }}
            </v-chip>

            <!-- Programs -->
            <v-chip
              v-for="program in startup.program.split(',')"
              :key="program"
              outlined
            >
              <v-icon left color="#757575">
                mdi-account-group
              </v-icon>
              {{ program }}
            </v-chip>

            <!-- Member since -->
            <!-- <v-chip
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
        <div class="py-4">
          <span class="subtitle-1">Verticals</span>
          <v-chip-group
            column
            multiple
          >
            <v-chip
              filter
              outlined
            >
              Advertising
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Automotive
            </v-chip>
            <v-chip
              filter
              outlined
            >
              Blockchain
            </v-chip>
          </v-chip-group>
          <!-- <CTButton
            primary
            text
            class="mt-2"
          >
            Ask for help
          </CTButton> -->
        </div>
        <!-- /Tags -->

        <!-- Skills -->
        <div v-if="startup.Tag && startup.Tag.length > 0" class="py-4">
          <span class="subtitle-1">Knowledge areas</span>
          <TagList :tags="startup.Tag" />
        </div>
        <!-- /Skills -->

        <v-divider />

        <!-- Team -->
        <div class="py-4">
          <span class="subtitle-1">Team</span>
          <v-list>
            <!-- Component starts here -->
            <!--
             <v-list-item
              v-for="person in startup.Person"
              :key="person.id"
            >
              <v-list-item-avatar>
                <v-img src="person.pic"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>
                  {{ person.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ person.role }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item> -->

            <!-- Component starts here -->
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://codingcarlos.com/wp-content/uploads/2017/07/epic-yo-600x600.jpg"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Carlos Hernández</v-list-item-title>
                <v-list-item-subtitle>Lead Barbudo</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <!-- Component ends here -->
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://codingcarlos.com/wp-content/uploads/2017/07/epic-yo-600x600.jpg"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Ivo Vilches</v-list-item-title>
                <v-list-item-subtitle>Lead Gafotas</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://codingcarlos.com/wp-content/uploads/2017/07/epic-yo-600x600.jpg"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Olga Salas</v-list-item-title>
                <v-list-item-subtitle>Lead Culona</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <CTButton text>View 3 more</CTButton>
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
    </div>
  </AsideCard>
</template>

<script>
export default {
  computed: {
    startup () {
      const id = this.$store.state.aside.id
      return this.$store.getters['startup/getById'](id) || {}
    },
    // REVIEW THIS: Is this part of store?
    config () {
      return {}
    },
    tagCategories () {
      if (!this.config.startupTagCategories || this.config.startupTagCategories.length === 0) {
        return []
      }

      const categories = this.config.startupTagCategories.split(',')

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
.aside-card {
  border:  1px solid var(--v-grey-base);
  /*border:  1px solid var(--v-grey-lighten1);*/
}

.aside-card,
.aside-card .v-toolbar {
  border-radius: 8px;
}

.lateral-scrollable {
  max-height: calc(100vh - 48px - 32px);
  overflow-y: scroll;
}

@media screen and (max-width: 959px) {

  /* removes border from profile view in mobile */
  /* should be a global class for other views like filters */
  .aside-card {
    border-radius: none;
    border: none;
  }

}

</style>
