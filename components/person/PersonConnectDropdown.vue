<template>
  <v-menu offset-y bottom right>
    <template v-slot:activator="{ on, attrs }">
      <CTButton
        v-bind="attrs"
        v-on="on"
      >
        More
        <v-icon class="person-connect-dropdown__icon">
          expand_more
        </v-icon>
      </CTButton>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in options"
        :key="index"
        href="https://google.com"
        target="_blank"
      >
        <v-list-item-title>
          {{ item.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => ([
        { name: 'Slack' },
        { name: 'Option 2' },
        { name: 'Twiter' }
      ])
    }
  }
}
</script>

<style scoped>
  /* Fix icon positioning inside ct-button  */
  .person-connect-dropdown__icon {
    margin-right: -8px;
  }
</style>
