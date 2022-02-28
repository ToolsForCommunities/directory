<template>
  <v-card
    :loading="loading"
    :to="`?aside=startup/${id}`"
    nuxt
    class="mx-auto my-1"
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
      :cover="false"
      :src="logo || '/img/nologo.png'"
    />
    <v-divider />
    <div>
      <v-card-title
        class="pt-2 pb-0 px-4 text-truncate d-block"
        :title="name"
      >
        {{ name }}
      </v-card-title>

      <v-card-text>
        <div class="subtitle-1 text-truncate">
          <span>
            {{ program || location }}
          </span>
        </div>
      </v-card-text>
    </div>
  </v-card>
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
    logo: {
      type: String,
      default: '/img/nologo.png',
      required: false
    },
    location: {
      type: String,
      default: '',
      required: false
    },
    program: {
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
        action: 'view_startup',
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
