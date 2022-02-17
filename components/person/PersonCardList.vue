<template>
  <div>
    <!-- Person Cards Skeletons (loading...) -->
    <v-row
      v-if="people.length === 0 && $store.state.people.list.loading"
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

    <div v-else-if="people.length === 0">
      No one found
    </div>

    <!-- Person Cards -->
    <v-row
      v-else
      dense
    >
      <v-col
        v-for="person in people"
        :key="person.id"
        cols="6"
        lg="4"
      >
        <PersonCard
          v-bind="person"
          :startup="person.Group && person.Group[0]"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    people: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>
