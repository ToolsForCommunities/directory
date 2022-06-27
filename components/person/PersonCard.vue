<template>
  <v-hover class="elevation-0">
    <template #default="{ hover }">
      <v-card
        :elevation="hover ? 12 : 0"
        :loading="loading"
        :to="`?aside=person/${id}`"
        nuxt
        class="mx-auto my-1 mb-0"
        style="height: 100%;"
        flat
        outlined
        @click="track"
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="4"
            indeterminate
          />
        </template>

        <v-img
          :aspect-ratio="1"
          contain
          :src="pic || '/img/nopic.png'"
        />

        <v-divider />

        <div>
          <v-card-title
            class="pb-0 pt-2 px-4 text-truncate d-block"
            :title="fullname"
          >
            {{ fullname }}
          </v-card-title>

          <v-card-text>
            <div class="subtitle-1 text-truncate">
              <span>
                {{ startup && startup.role }}
              </span>
              <br>
              <span>
                {{ startup && startup.name }}
              </span>
            </div>

            <!-- Location -->
            <!-- <div class="mt-2">
              <v-icon>mdi-map-marker</v-icon> {{ location }}
            </div> -->
            <!-- /Location -->

            <!-- <v-chip-group
              multiple
              active-class="deep-purple accent-4 white--text"
            >
              <v-chip>Technology</v-chip>

              <v-chip>UX</v-chip>

              <v-chip>Javascript</v-chip>

              <v-chip>Community Management</v-chip>
            </v-chip-group> -->
          </v-card-text>
        </div>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
import getViewCategory from '@/assets/js/helpers/getViewCategory'

export default {
  props: {
    id: {
      type: String,
      default: '',
      required: true
    },
    name: {
      type: String,
      default: '',
      required: true
    },
    surname: {
      type: String,
      default: '',
      required: false
    },
    pic: {
      type: String,
      default: '/img/nopic.png',
      required: false
    },
    location: {
      type: String,
      default: '',
      required: false
    },
    Group: {
      type: Array,
      default: () => [],
      required: false
    }
  },
  data: () => ({
    loading: false
  }),
  computed: {
    fullname () {
      // ToDo: Check config, to see if we have to reverse name and surname
      return `${this.name} ${this.surname}`
    },
    startup () {
      return (this.Group && this.Group[0]) || null
    }
  },
  methods: {
    track () {
      const category = getViewCategory(this.$route.name.split('__')[0])

      this.$store.dispatch('track/event', {
        category,
        action: 'view_person',
        label: this.id
      })
    }
  }
}
</script>

<style scoped>
.v-card__title {
  /* background-color: green;*/
}
.v-image__image {
  object-fit: cover;
}
</style>
