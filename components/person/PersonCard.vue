<template>
  <v-card
    :loading="loading"
    class="mx-auto my-1"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="4"
        indeterminate
      />
    </template>

    <v-img
      aspect-ratio="1"
      src="https://codingcarlos.com/wp-content/uploads/2017/07/epic-yo-600x600.jpg"
    />

    <div>
      <v-card-title
        class="pb-0 pt-2 px-4 text-truncate d-block"
        title="Carlos Hernadez Martin"
      >
        Carlos Hernandez Martin
      </v-card-title>

      <v-card-text>
        <div class="subtitle-1">
          <span>
            Tech Founder
          </span>
          <br>
          <span>
            Community Tools
          </span>
        </div>

        <!-- Location -->
        <!-- <div class="mt-2">
          <v-icon>mdi-map-marker</v-icon> Madrid
        </div> -->
        <!-- /Location -->

        <!-- <v-chip-group
          multiple
          active-class="deep-purple accent-4 white--text"
        >
          <v-chip>Technology</v-chip>

          <v-chip>UX</v-chip>

          <v-chip>Javascript</v-chip>

          <v-chip>Community Management</v-chip>
        </v-chip-group> -->
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false
  })
  // created () {
  //   this.loading = true

  //   setTimeout(() => (this.loading = false), 2000)
  // }
}
</script>

<style scoped>
.v-card__title {
  /*background-color: green;*/
}
</style>
