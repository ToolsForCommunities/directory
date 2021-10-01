<template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
      <CTButton
        @click="$store.dispatch('auth/logout')"
      >
        Logout
      </CTButton>

      <nuxt-link to="login">Login</nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'default',
  head: {
    title: 'Inspiration'
  }
}
</script>
