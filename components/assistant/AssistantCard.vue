<template>
  <div class="assistant-card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import '~vuetify/src/styles/styles.sass';

.assistant-card {
  background:  var(--v-grey-lighten1);
  border-radius: 8px;
}
</style>
