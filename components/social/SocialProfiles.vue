<template>
  <div v-if="active.length > 0">
    <span class="subtitle-1">Social</span>

    <v-list>
      <SocialProfileItem
        v-for="platform in active"
        :key="platform.field"
        :link="item[platform.field]"
        :platform="platform"
      />
    </v-list>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    platforms: [
      {
        field: 'linkedin',
        name: 'Linkedin',
        icon: 'mdi-linkedin'
      },
      {
        field: 'twitter',
        name: 'Twitter',
        icon: 'mdi-twitter'
      },
      {
        field: 'facebook',
        name: 'Facebook',
        icon: 'mdi-facebook'
      },
      {
        field: 'instagram',
        name: 'Instagram',
        icon: 'mdi-instagram'
      },
      {
        field: 'freelancer',
        name: 'Freelancer.com',
        icon: 'mdi-freelancer'
      },
      {
        field: 'upwork',
        name: 'Upwork',
        icon: 'mdi-upwork'
      }
    ]
  }),
  computed: {
    active () {
      return this.platforms.filter(platform => !!this.item[platform.field])
    }
  }
}
</script>
