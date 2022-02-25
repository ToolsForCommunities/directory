<template>
  <div>
    <NavigationMainTopbar
      title="More"
    />
    <v-container class="pa-0">
    <!-- profile -->
    <!-- <div>
      <div>
        <v-avatar size="36px">
          <img
            alt="Avatar"
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          >
        </v-avatar>
        <span>holi</span>
      </div>
      <v-col class="text-center">
        <CTButton
          @click="$store.dispatch('auth/logout')"
        >
          Logout
        </CTButton>
        <nuxt-link
          to="login"
        >
          Login
        </nuxt-link>
      </v-col>
    </div> -->
    <!-- /profile -->
    <!-- <v-divider class="mb-4" /> -->
    <!-- FAQ -->
    <div class="mx-4 mt-4 mb-6">
      <div class="d-flex flex-column">
        <span class="title">FAQ</span>
        <span class="subtitle-1">Frequent asked questions</span>
      </div>
      <v-expansion-panels
        v-model="panel"
        multiple
        accordion
        class="mt-3"
      >
        <v-expansion-panel :key="index" v-model="panel" expand>
          <v-expansion-panel-header
            class="subtitle-1"
          >
            Privacy
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Your privacy is at the core of our product
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header
            class="subtitle-1"
          >
            Where's my profile?
          </v-expansion-panel-header>
          <v-expansion-panel-content> Some content </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header
            class="subtitle-1"
          >
            Editing my profile
          </v-expansion-panel-header>
          <v-expansion-panel-content> Some content </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <!-- /FAQ -->
    <v-divider class="mb-4" />
    <!-- About -->
    <div class="mx-4">
      <div class="d-flex flex-column">
        <span class="title">About</span>
        <span class="body">
          This directory is part of Google for Startups & Community Tools, a project created to facilitate contacts across Google for Startups Campus communities.
          If you want to share your thoughts, report a bug or just say hi, you can get in touch by clicking here. We'd love to hear whatever's on your mind!
        </span>
      </div>
    </div>
    <!-- /About -->
    </v-container>
    <v-footer padless absolute>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Community Tools</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data () {
    return {
      panel: [0]
    }
  },
  head: {
    title: 'Inspiration'
  }
}
</script>
