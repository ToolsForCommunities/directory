<template>
  <v-card
    :loading="loading"
    :to="`?aside=person/${id}`"
    nuxt
    class="mx-auto my-1"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="4"
        indeterminate
      />
    </template>

    <v-img
      aspect-ratio="1"
      :src="pic || '/img/nopic.png'"
    />

    <div>
      <v-card-title
        class="pb-0 pt-2 px-4 text-truncate d-block"
        :title="fullname"
      >
        {{ fullname }}
      </v-card-title>

      <v-card-text>
        <div class="subtitle-1">
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

<script>
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
  }
}
</script>

<style scoped>
.v-card__title {
  /*background-color: green;*/
}
</style>
