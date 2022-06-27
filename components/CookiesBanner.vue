<template>
  <!-- Alert/cookies -->
  <v-alert
    v-if="!cookiesAccepted"
    text
    color="info"
    class="mb-0"
  >
    <v-row
      align="center"
      no-gutters
      class="justify-space-between"
    >
      <!-- <v-col class="col-12 col-md-6 mb-4 mb-lg-0"> -->
      <v-col class="col-12 col-md-11 mb-4 mb-lg-0">
        <!-- <h3 class="text-h5">
          Take a minute to review your privacy settings
        </h3> -->
        <!-- <span>Community Tools tracks some of the actions users take inside our products to understand how they use them with a technology called "cookies". You can configure how these cookies work, accept or reject all.</span> -->
        <span>Community Tools tracks some of the actions users take inside our products to understand how they use them with a technology called "cookies". You can <nuxt-link to="more">read more about cookies here</nuxt-link>.</span>
      </v-col>
      <!-- <v-spacer></v-spacer> -->
      <v-col class="shrink">
        <div class="d-flex flex-row">
          <!-- <CTButton
            color="info"
            outlined
            class="mr-2"
          >
            Reject all
          </CTButton>
          <CTButton
            color="info"
            outlined
            class="mr-2"
          >
            Configure
          </CTButton>
          <CTButton
            color="info"
            outlined
          >
            Accept all
          </CTButton> -->
          <CTButton
            color="info"
            outlined
            @click="acceptCookies()"
          >
            Accept all
          </CTButton>
        </div>
      </v-col>
    </v-row>
  </v-alert>
  <!-- Alert/cookies -->
</template>

<script>
export default {
  data: () => ({
    cookiesAccepted: true
  }),
  mounted () {
    this.cookiesAccepted = !!localStorage.getItem('cookiesAccepted')
  },
  methods: {
    acceptCookies () {
      localStorage.setItem('cookiesAccepted', new Date())
      this.cookiesAccepted = true
    }
  }
}
</script>
