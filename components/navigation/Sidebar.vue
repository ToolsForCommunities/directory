<template>
  <div class="d-flex flex-column">
    <NavigationButton
      class="my-2 hidden-sm-and-down"
      icon=" "
    >
      Community Tools
    </NavigationButton>

    <v-divider />

    <div class="d-flex sidebar-links mx-2">
      <NuxtLink
        v-for="item in items"
        :key="item.name"
        :to="item.route"
        class="sidebar-link"
      >
        <NavigationButton
          :icon="item.icon"
          :active="$route.path === item.route"
          class="my-2"
        >
          {{ item.name }}
        </NavigationButton>
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
.sidebar-links {
  flex-direction: column;
}

.sidebar-link {
  text-decoration: none;
}
</style>
