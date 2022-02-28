<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-img :src="pic || '/img/nopic.png'" />
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>{{ name }}</v-list-item-title>
      <v-list-item-subtitle>{{ role }}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    pic: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      default: ''
    }
  }
}
</script>
