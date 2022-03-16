<template>
  <AsideCard>
    <!-- Toolbar -->
    <template slot="toolbar">
      <AsideNavigationMain>
        <template slot="options">
          <v-btn
            icon
            :href="`/admin/#/suggest-person-public/${person.id}`"
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
      :src="person.pic || '/img/nopic.vue'"
    />
    <!-- /Picture -->

    <!-- Info -->
    <div class="px-4 px-md-0">
      <!-- Name -->
      <v-card-title
        class="pb-0 pt-2 pa-0 ma-0 text-center d-block"
        title="Carlos Hernadez Martin"
      >
        {{ fullname }}
      </v-card-title>
      <!-- /Name -->
      <!-- Job description -->
      <v-card-text
        v-if="startup"
        class="pa-0 ma-0 text-center"
      >
        <div class="subtitle-1 d-flex flex-column">
          <span>
            {{ startup.role }}
          </span>
          <span>
            <nuxt-link
              :to="'?aside=startup/'+startup.id"
              @click.native="$store.dispatch('track/event', { action: 'view_startup', category: 'person_detail', label: person.id })"
            >
              {{ startup.name }}
            </nuxt-link>
          </span>
        </div>
      </v-card-text>
      <!-- /Job description -->

      <!-- Connect CTA -->
      <PersonConnect :item="person" />
      <!-- /Connect CTA -->

      <!-- About -->
      <div class="py-4">
        <span class="subtitle-1">About {{ person.name }}</span>

        <!-- Bio -->
        <div class="body-2">
          <span>
            {{ person.bio }}
          </span>
        </div>
        <!-- /Bio -->

        <!-- Chips -->
        <v-chip-group
          column
          multiple
          class="pt-2"
        >
          <!-- Location -->
          <v-chip
            v-if="$settings.hasLocation && person.location"
            outlined
          >
            <v-icon small left color="#757575">
              mdi-map-marker
            </v-icon>
            {{ person.location }}
          </v-chip>

          <!-- Program -->
          <span v-if="$settings.hasProgram && person.program">
            <v-chip
              v-for="program in person.program.split(',')"
              :key="program"
              outlined
            >
              <v-icon small left color="#757575">
                mdi-account-group
              </v-icon>
              {{ program }}
            </v-chip>
          </span>

          <!-- ToDo: Membership -->
          <v-chip
            v-if="$settings.hasMembership && person.joinedAt"
            outlined
          >
            <v-icon small left color="#757575">
              mdi-calendar
            </v-icon>
            Member since {{ person.joinedAt }}
          </v-chip>
        </v-chip-group>
        <!-- /Chips -->
      </div>
      <!-- /About -->

      <v-divider />

      <!-- Skills -->
      <div v-if="skills.length > 0" class="py-4">
        <span class="subtitle-1">
          {{ $settings.skillsProfileText || 'Knowledge areas' }}
        </span>
        <TagList :tags="skills" />
      </div>
      <!-- /Skills -->

      <!-- Interests -->
      <div v-if="interests.length > 0" class="pb-4">
        <span class="subtitle-1">
          {{ $settings.interestsProfileText || 'Needs help with' }}
        </span>
        <TagList :tags="interests" />

        <!-- <div class="pt-2">
          <CTButton
            primary
            text
          >
            Ask for help
          </CTButton>
          <CTButton
            primary
            text
          >
            Help {{ person.name }}
          </CTButton>
        </div> -->
      </div>
      <!-- /Interests -->

      <!-- Custom Tags -->
      <div v-if="personTagCategories && personTagCategories.length > 0">
        <div
          v-for="(category, i) in personTagCategories"
          :key="i"
          class="pb-4"
        >
          <span class="subtitle-1">
            {{ category }}
          </span>
          <TagList :tags="categoryTags(category)" />
        </div>
      </div>
      <!-- /Custom Tags -->

      <v-divider />

      <!-- Social -->
      <div class="py-4">
        <SocialProfiles :item="person" />
      </div>
      <!-- /Social -->
    </div>
    <!-- /Info -->
  </AsideCard>
</template>

<script>
export default {
  fetch () {
    const list = this.$store.state.people.lists
    if (!list || list.length === 0) {
      return this.$store.dispatch('people/list')
    }

    return Promise.resolve()
  },
  computed: {
    person () {
      const id = this.$store.state.aside.id
      return this.$store.getters['people/getById'](id) || {}
    },
    fullname () {
      // ToDo: Check if order should be inverted
      return `${this.person.name} ${this.person.surname}`
    },
    startup () {
      if (!this.person || !this.person.Group || !this.person.Group[0]) {
        return null
      }

      return this.person.Group[0]
    },
    skills () {
      if (!this.person || !this.person.Tag || !Array.isArray(this.person.Tag)) {
        return []
      }

      return this.person.Tag.filter(tag => tag.relations.includes('HAS_SKILL'))
    },
    interests () {
      if (!this.person || !this.person.Tag || !Array.isArray(this.person.Tag)) {
        return []
      }

      return this.person.Tag.filter(tag => tag.relations.includes('HAS_INTEREST'))
    },
    personTagCategories () {
      // ToDo: Filter the categories so it only appear if user has tags
      return (this.$settings.personTagCategories && this.$settings.personTagCategories.split(',')) || null
    }
  },
  // created () {
  //   this.$store.dispatch('track/page', this.$route.query.aside)
  // },
  methods: {
    categoryTags (category) {
      return this.person.Tag.filter(tag => tag.category && tag.category === category) || []
    }
  }
}
</script>
