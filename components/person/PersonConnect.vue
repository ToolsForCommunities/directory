<template>
  <div v-if="active.length > 0">
    <div class="text-center">
      <!-- Email connect -->
      <!-- ToDo: Hide if email connect is not enabled -->
      <nuxt-link :to="`?aside=email/${item.id}`">
        <CTButton
          primary
          class="my-4 mx-1"
          @click="$store.dispatch('track/event', { action: 'connect', category: 'person_detail', label: 'email' })"
        >
          Email
        </CTButton>
      </nuxt-link>

      <!-- Social networks -->
      <a
        v-for="platform in platformList"
        :key="platform.field"
        :href="item[platform.field]"
        target="_blank"
      >
        <CTButton
          primary
          class="my-4 mx-1"
          @click="$store.dispatch('track/event', { action: 'connect', category: 'person_detail', label: platform.field })"
        >
          {{ platform.name }}
        </CTButton>
      </a>

      <!-- ToDo: Dropdown with all the other options -->
    </div>
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
        field: 'slack',
        name: 'Slack',
        icon: 'mdi-slack'
      },
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
        field: 'upwork',
        name: 'Upwork',
        icon: 'mdi-upwork'
      },
      {
        field: 'freelancer',
        name: 'Freelancer.com',
        icon: 'mdi-freelancer'
      }
    ]
  }),
  computed: {
    active () {
      return this.platforms.filter(platform => !!this.item[platform.field])
    },
    platformList () {
      if (this.active.length <= 3) {
        return this.active
      }

      return [
        this.active[0],
        this.active[1]
      ]
    },
    dropdown () {
      if (this.active.length <= 3) {
        return null
      }

      return this.active.slice(2)
    }
  }
}
</script>
