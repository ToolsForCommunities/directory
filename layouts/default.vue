<template>
  <v-app>
    <div class="wrapper">
      <v-app-bar
        app
        :color="color"
        elevate-on-scroll
        :extended="extended"
        fixed
        :flat="!elevate"
        clipped-left
        clipped-right
      >
        <!-- <slot name="topbar"></slot> -->
        <NavigationMainTopbar />

        <!-- <slot name="extension" slot="extension"></slot> -->
        <div v-if="extended" slot="extension">
          <slot name="extension" />
        </div>
      </v-app-bar>

      <v-main>
        <nuxt />
      </v-main>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'TopbarLayout',
  props: {
    app: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'white'
    },
    elevate: {
      type: Boolean,
      default: false
    },
    extended: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
</style>
