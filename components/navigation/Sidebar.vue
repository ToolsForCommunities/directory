<template>
  <div class="d-flex flex-column">
    <NavigationButton class="my-2" icon=" ">
      Community Tools
    </NavigationButton>

    <v-divider />

    <div class="d-flex flex-column mx-2">
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
  data: () => ({
    items: [
      {
        name: 'Home',
        icon: 'mdi-home',
        route: '/'
      },
      {
        name: 'People',
        icon: 'mdi-account',
        route: '/people'
      },
      {
        name: 'Startups',
        icon: 'mdi-account-multiple',
        route: '/startups'
      },
      {
        name: 'More',
        icon: 'mdi-dots-horizontal-circle',
        route: '/inspire'
      }
    ]
  })
}
</script>

<style scoped>
/*>>> a, a {*/
.sidebar-link {
  text-decoration: none;
}
</style>
