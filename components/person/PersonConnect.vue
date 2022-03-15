<template>
  <div v-if="active.length > 0">
    <div class="text-center my-4">
      <!-- Email connect (hidden if not enabled) -->
      <nuxt-link
        v-if="$settings.emailConnect"
        :to="`?aside=email/${item.id}`"
      >
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
          class="mx-1"
          @click="$store.dispatch('track/event', { action: 'connect', category: 'person_detail', label: platform.field })"
        >
          {{ platform.name }}
        </CTButton>
      </a>

      <!-- Dropdown with all the other options -->
      <PersonConnectDropdown
        v-if="dropdown && dropdown.length"
        :options="dropdown"
        @click="$store.dispatch('track/event', { action: 'connect_dropdown', category: 'person_detail' })"
      />
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
    itemsPreDropdown () {
      let itemsPreDropdown = 3
      if (this.$settings.emailConnect) {
        itemsPreDropdown -= 1
      }

      return itemsPreDropdown
    },
    platformList () {
      if (this.active.length <= this.itemsPreDropdown) {
        return this.active
      }

      return this.active.slice(0, this.itemsPreDropdown - 1)
    },
    dropdown () {
      if (this.active.length <= this.itemsPreDropdown) {
        return null
      }

      return this.active.slice(this.itemsPreDropdown - 1)
    }
  }
}
</script>
