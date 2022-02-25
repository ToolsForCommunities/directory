<template>
  <AsideCard>
    <!-- Content -->
    <div>
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
              <nuxt-link :to="'?aside=startup/'+startup.id">
                {{ startup.name }}
              </nuxt-link>
            </span>
          </div>
        </v-card-text>
        <!-- /Job description -->

        <!-- Connect CTA -->
        <div class="text-center">
          <CTButton
            primary
            class="my-4"
          >
            Slack
          </CTButton>
          <CTButton
            primary
            class="my-4"
          >
            Mail
          </CTButton>
        </div>
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
            <v-chip
              v-if="person.location"
              filter
              outlined
            >
              <v-icon left color="#757575">
                mdi-map-marker
              </v-icon>
              {{ person.location }}
            </v-chip>
            <v-chip
              v-if="person.program"
              filter
              outlined
            >
              <v-icon left color="#757575">
                mdi-account-group
              </v-icon>
              {{ person.program }}
            </v-chip>
            <v-chip
              v-if="person.joinedAt"
              filter
              outlined
            >
              <v-icon left color="#757575">
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
          <span class="subtitle-1">Knowledge areas</span>
          <TagList :tags="skills" />
        </div>
        <!-- /Skills -->

        <!-- Interests -->
        <div v-if="interests.length > 0" class="pb-4">
          <span class="subtitle-1">Needs help with</span>
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

        <v-divider />

        <!-- Social -->
        <div class="py-4">
          <SocialProfiles :item="person" />
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
    }
  }
}
</script>
