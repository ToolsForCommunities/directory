<template>
  <div>
    <!-- Startup Cards Skeletons (loading...) -->
    <v-row
      v-if="startups.length === 0 && $store.state.startups.list.loading"
      dense
    >
      <v-col
        v-for="i in 6"
        :key="i"
        cols="6"
        lg="4"
      >
        <v-skeleton-loader
          v-bind="attrs"
          type="image, article"
        />
      </v-col>
    </v-row>

    <div v-else-if="startups.length === 0">
      No one found
    </div>

    <!-- Startup Cards -->
    <v-row
      v-else
      dense
    >
      <v-col
        v-for="startup in startups"
        :key="startup.id"
        cols="6"
        lg="4"
      >
        <StartupCard
          v-bind="startup"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    startups: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>
