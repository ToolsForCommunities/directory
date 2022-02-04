<template>
  <div>
    <v-toolbar
      flat
      color="white"
    >
      <v-toolbar-title class="px-4 font-weight-bold fill-width">
        Assistant
      </v-toolbar-title>
    </v-toolbar>

    <div class="mx-4 my-2">
      <AssistantCard>
        <header class="pa-4">
          <h2>Getting</h2>
        </header>

        <v-divider />

        <section class="pa-4">
          <h3>Finish your profile</h3>
          <p class="mb-0">
            Help other find your
          </p>
        </section>

        <v-divider />

        <section class="pa-4">
          <h3>Connect your Slack acoount</h3>
          <p class="mb-0">
            Are you new to the community and want to connect with other startups? Are you looking for other members with a specific expertise to help you grow your company?
          </p>
        </section>
      </AssistantCard>

      <AssistantCard class="mt-4">
        <header class="pa-4">
          <h2>We care</h2>
        </header>

        <v-divider />

        <section class="pa-4">
          <h3>Finish your profile</h3>
          <p class="mb-0">
            Are you new to the community and want to connect with other startups? Are you looking for other members with a specific expertise to help you grow your company?
          </p>
        </section>

        <v-divider />

        <section class="pa-4">
          <h3>Connect your Slack acoount</h3>
          <p class="mb-0">
            Are you new to the community and want to connect with other startups? Are you looking for other members with a specific expertise to help you grow your company?
          </p>
        </section>
      </AssistantCard>
    </div>
  </div>
</template>
