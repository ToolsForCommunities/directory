<template>
  <a
    v-if="!$settings.hideAddButton"
    href="/admin/#/suggest-public/"
    target="_blank"
  >
    <CTButton
      text
    >
      <!-- <v-icon left>
        mdi-account-plus
      </v-icon> -->
      <!-- <v-icon left>
        mdi-plus-circle-outline
      </v-icon> -->
      Add new
    </CTButton>
  </a>
</template>
