<template>
  <v-app>
    <LayoutMain>
      <div slot="sidebar">
        I'm the sidebar
      </div>

      <div slot="content">
        <h1>Hey, I'm here!</h1>
        <!-- <HelloWorld /> -->
        <nuxt />
      </div>

      <div slot="aside">
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
