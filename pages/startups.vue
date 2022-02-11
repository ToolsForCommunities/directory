<template>
  <!-- <div class="ct-container ct-container__has-topbar"> -->
  <div>
    <NavigationMainTopbar
      title="Startups"
    />
    <v-container>
      <p>
        <nuxt-link to="?aside=startup/2">
          I'm startup 2
        </nuxt-link>
        <nuxt-link to="?aside=startup/4">
          I'm startup 4
        </nuxt-link>
      </p>

      <v-row dense>
        <v-col
          v-for="i in 9"
          :key="i"
          cols="6"
          lg="4"
        >
          <PersonCard />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
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
