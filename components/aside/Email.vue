<template>
  <AsideCard>
    <!-- Toolbar -->
    <template slot="toolbar">
      <AsideNavigationMain />
    </template>
    <!-- /Toolbar -->

    <div>
      <h2
        class="headline text-xs-center d-block"
        primary-title
      >
        {{ $t('email.connect') }}
      </h2>

      <div>
        <p class="pb-2 text-xs-center">
          {{ $t('email.subtitle') }}
        </p>

        <v-text-field
          v-model="name"
          :label="$t('email.name')"
          placeholder="Bruce Wayne"
          required
          :error-messages="nameError"
        />
        <v-text-field
          v-model="email"
          :label="$t('email.email')"
          placeholder="bruce@wayne.com"
          required
          type="email"
          :error-messages="emailError"
        />
        <v-textarea
          v-model="message"
          auto-grow
          :label="$t('email.message')"
          placeholder="Write what you want to tell"
          :error-messages="messageError"
        />

        <!-- <VueRecaptcha
          sitekey="6Lf4fOIZAAAAAEeq56xYIbvRDK7YmpGBRkDDOhpo"
          :loadRecaptchaScript="true"
        /> -->
        <recaptcha />
      </div>

      <!-- <loading
        v-if="$store.state.mail.loading"
        class="mb-3"
      /> -->

      <div class="justify-center">
        <CTButton
          :disabled="!canSend"
          color="primary"
          @click="sendMail()"
        >
          Connect through email
        </CTButton>
      </div>
    </div>
  </AsideCard>
</template>

<script>
export default {
  data: () => ({
    name: '',
    email: '',
    message: '',
    showErrors: false
  }),
  computed: {
    id () {
      return this.$store.state.aside.id
    },
    emailError () {
      if (!this.showErrors) { return null }

      const { email } = this
      if (!email) {
        return 'Email is mandatory'
      } else if (!email.includes('@') || !email.includes('.')) {
        return 'Invalid email format'
      }

      return null
    },
    nameError () {
      if (!this.showErrors) { return null }
      if (!this.name) {
        return 'Name is mandatory'
      }
      return null
    },
    messageError () {
      if (!this.showErrors) { return null }
      if (!this.message) {
        return 'Message is mandatory'
      }
      return null
    },
    canSend () {
      if (this.$store.state.mail.isLoading === true) { return false }

      return (this.id && this.name && this.email && this.message)
    }
  },
  methods: {
    async sendMail () {
      try {
        const token = await this.$recaptcha.getResponse()
        console.log('ReCaptcha token:', token)

        // send token to server alongside your form data

        const { id, name, email, message } = this
        if (!id || this.nameError || this.emailError || this.messageError) {
          this.showErrors = true
          return false
        }

        this.$store.dispatch('track/event', {
          action: 'email_connect',
          category: 'connect'
        })

        // console.log({
        await this.$store.dispatch('mail/send', {
          id,
          name,
          email,
          message
        })

        // Show success info
        this.$store.dispatch('alerts/show', { text: 'Email sent!' })

        // Reset recaptcha
        await this.$recaptcha.reset()
      } catch (error) {
        this.$store.dispatch('alerts/show', { text: 'Something went wrong. Try again.' })
      }
    }
  }
}
</script>

<style scoped>

</style>
