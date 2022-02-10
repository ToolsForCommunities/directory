<template>
  <div class="d-flex flex-column">
    <v-app-bar
      flat
      elevate-on-scroll
      color="white"
      class="d-flex flex-column pt-2"
    >
      <MainLogo class="sidebar-logo" />
    </v-app-bar>

    <div class="d-flex sidebar-links mx-2">
      <NuxtLink
        v-for="item in items"
        :key="item.name"
        :to="item.route"
        class="sidebar-link"
      >
        <CTNavigationButton
          :icon="item.icon"
          :active="$route.path === item.route"
          class="my-0"
        >
          {{ item.name }}
        </CTNavigationButton>
      </NuxtLink>
    </div>
  </div>
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
.sidebar-logo {
  max-width: 180px;
}

.sidebar-links {
  flex-direction: column;
}

.sidebar-link {
  text-decoration: none;
}
</style>
