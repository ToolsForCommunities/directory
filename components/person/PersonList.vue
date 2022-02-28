<template>
  <v-list>
    <PersonListItem
      v-for="person in people"
      :key="person.id"
      v-bind="person"
    />
  </v-list>
</template>

<script>
export default {
  props: {
    people: {
      type: Array,
      default: () => {}
    }
  }
}
</script>
