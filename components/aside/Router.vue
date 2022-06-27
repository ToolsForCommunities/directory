<template>
  <div>
    <!-- Default Aside State: Assistant -->
    <AsideAssistant v-if="!$store.state.aside.current" />

    <!-- Person -->
    <AsidePerson v-else-if="$store.state.aside.current === 'person'" />

    <!-- Startup -->
    <AsideStartup v-else-if="$store.state.aside.current === 'startup'" />

    <!-- Filters -->
    <AsideFilters v-else-if="$store.state.aside.current === 'filters'" />

    <!-- Email -->
    <AsideEmail v-else-if="$store.state.aside.current === 'email'" />

    <!-- In case of unknown aside state, show it as is. -->
    <div v-else>
      <p>{{ $store.state.aside }}</p>
    </div>
  </div>
</template>
