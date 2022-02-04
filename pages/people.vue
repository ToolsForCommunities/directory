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
        <nuxt-link to="?aside=person/1">
          I'm person 1
        </nuxt-link>
        <nuxt-link to="?aside=person/3">
          I'm person 3
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
