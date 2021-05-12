<template>
  <!-- <div class="ct-container ct-container__has-topbar"> -->
  <div>
    <NavigationMainTopbar
      title="People"
    />
    <v-container>
      <p>
        People list goes here
      </p>
      <p>
        <nuxt-link to="?aside=person/1">I'm person 1</nuxt-link>
        <nuxt-link to="?aside=person/3">I'm person 3</nuxt-link>
        <!-- <nuxt-link to="/person/3">I'm a person</nuxt-link> -->
        <!-- <nuxt-link to="people?profile=3">I'm a person</nuxt-link> -->
      </p>
    </v-container>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  // components: {
  //   Logo,
  //   VuetifyLogo
  // }
  head: {
    title: 'People',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'All the people in your directory'
      }
    ]
  }
}
</script>

<style scoped>
.ct-container {
  height: 100vh;
  max-height: 100vh;
  overflow: auto;
}
  .ct-container__has-topbar {
    padding-top: 64px;
  }
</style>
