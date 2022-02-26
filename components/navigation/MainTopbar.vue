<template>
  <div class="sticky-topbar">
    <v-app-bar
      color="white"
      flat
    >
      <h1>
        {{ title }}
      </h1>
      <v-spacer />
      <a
        v-if="!$settings.hideAddButton"
        href="/admin/#/suggest-public/"
        target="_blank"
      >
        <CTButton
          text
        >
          <!-- <v-icon left>
            mdi-account-plus
          </v-icon> -->
          <!-- <v-icon left>
            mdi-plus-circle-outline
          </v-icon> -->
          Add new
        </CTButton>
      </a>
    </v-app-bar>
    <v-divider style="position: absolute; width: 100%" />
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    title: {
      type: String,
      default: 'Directory'
    }
  }
}
</script>

<style scoped>
.sticky-topbar {
  position: sticky;
  top: 0px;
  z-index: 1;
}
</style>
