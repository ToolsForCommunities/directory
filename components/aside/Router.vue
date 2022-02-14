<template>
  <div>
    <!-- Default Aside State: Assistant -->
    <AsideAssistant v-if="!$store.state.aside.current" />

    <!-- Person -->
    <AsidePerson v-else-if="$store.state.aside.current === 'person'" />

    <!-- Filters -->
    <AsideFilters v-else-if="$store.state.aside.current === 'filters'" />

    <!-- In case of unknown aside state, show it as is. -->
    <div v-else>
      <p>{{ $store.state.aside }}</p>
    </div>
  </div>
</template>
