<template>
  <div class="aside-card ma-md-4 ma-0 mb-0">
    <slot name="toolbar" />

    <v-divider />

    <div class="pa-md-4 pa-0 lateral-scrollable">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.aside-card {
  border:  1px solid var(--v-grey-base);
  /*border:  1px solid var(--v-grey-lighten1);*/
}

.aside-card,
.aside-card .v-toolbar {
  border-radius: 8px;
}

.lateral-scrollable {
  max-height: calc(100vh - 84px);
  overflow-y: auto;
}

@media screen and (max-width: 959px) {

  /* removes border from profile view in mobile */
  /* should be a global class for other views like filters */
  .aside-card {
    border-radius: none;
    border: none;
  }

  .lateral-scrollable {
    max-height: calc(100vh - 48px);
  }

}
</style>
