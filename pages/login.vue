<template>
  <v-row>
    <v-col class="text-center">
      <h1>Login</h1>
      <CTButton
        contained
        @click="login()"
      >
        <v-icon size="14" class="pr-2">
          mdi-google
        </v-icon>
        Login with google
      </CTButton>

      <CTButton
        @click="$store.dispatch('auth/logout')"
      >
        Logout
      </CTButton>
    </v-col>
  </v-row>
</template>

<script>
import firebase from 'firebase'

export default {
  layout: 'default',
  head () {
    return {
      title: 'Login'
    }
  },
  created () {
    this.auth()
  },
  methods: {
    auth () {
      if (!this.$fire.auth.currentUser) {
        return false
      }

      return this.$fire.auth.currentUser.getIdToken()
        .then(token => this.$store.dispatch('auth/login', { token }))
        .then(() => {
          this.$store.dispatch('alerts/show', {
            color: 'black',
            text: 'Welcome back 🤙'
          })

          if (this.$route.params.redirect) {
            this.$router.replace(this.$route.params.redirect)
          } else {
            this.$router.replace('/')
          }
        })
        .catch((error) => {
          console.error(error.code, error.message)
          this.$store.dispatch('alerts/show', {
            color: 'black',
            text: 'Something\'s not working 🥴 Try loggin in again 🔐'
          })
        })
    },
    login () {
      const provider = new firebase.auth.GoogleAuthProvider()
      // const provider = this.$fire.auth.GoogleAuthProvider
      return this.$fire.auth.signInWithPopup(provider)
        .then(this.auth)
        .catch((error) => {
          if (error.code !== 'auth/popup-closed-by-user') {
            this.$store.dispatch('alerts/show', {
              color: 'black',
              text: 'Google authentication is not working 😳 Try again in a few minutes 🤞'
            })
          }
        })
    }
  }
}
</script>
