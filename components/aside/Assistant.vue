<template>
  <div>
    <!-- <v-toolbar
      flat
      color="white"
    >
      <v-toolbar-title class="px-4 font-weight-bold fill-width">
        Assistant
      </v-toolbar-title>
    </v-toolbar> -->

    <div class="mx-4 my-4">
      <AssistantCard>
        <header class="pa-4">
          <h2>Getting started</h2>
        </header>

        <v-divider />

        <section class="pa-4">
          <h3>Finish your profile</h3>
          <p class="mb-0">
            Help other find you
          </p>
        </section>

        <v-divider />

        <section class="pa-4">
          <h3>Connect your Slack account</h3>
          <p class="mb-0">
            Are you looking for other members with a specific expertise to help you grow your company?
          </p>
          <!-- <CTButton text class="pa-0 ma-0">Start</CTButton> -->
        </section>
      </AssistantCard>
    </div>
  </div>
</template>
