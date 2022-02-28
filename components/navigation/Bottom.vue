<template>
  <v-bottom-navigation
    grow
  >
    <NuxtLink
      v-for="item in items"
      :key="item.name"
      :to="item.route"
      class="bottombar-link"
    >
      <CTNavigationButton
        :icon="item.icon"
        :active="$route.path === item.route"
        :static-icon="item.staticIcon"
      >
        <span>{{ item.name }}</span>
      </CTNavigationButton>
    </NuxtLink>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'NavigationSidebar',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.bottombar-link {
  text-decoration: none;
  flex-grow: 1;
  display: flex;
  justify-content: center;
}
  >>> .bottombar-link .v-btn:not(.v-btn--round).v-size--x-large {
    min-width: auto;
  }

.v-item-group.v-bottom-navigation .bottombar-link >>> .v-btn__content {
  flex-direction: column;
}
</style>
