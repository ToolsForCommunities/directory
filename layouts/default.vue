<template>
  <v-app>
    <LayoutMain :hide-aside="hideAside">
      <NavigationSidebar slot="sidebar" />

      <div slot="content">
        <nuxt />
      </div>

      <div slot="aside">
        <NavigationButton class="mb-2" icon=" ">
          Carlos Hernandez
        </NavigationButton>

        <v-divider />

        I'm lateral content
      </div>
    </LayoutMain>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data: () => ({
    hideAside: false
  })
}
</script>

<style scoped>
</style>
