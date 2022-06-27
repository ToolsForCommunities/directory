import Vue from 'vue'

const mixin = {
  computed: {
    $settings () {
      return this.$store.state.config.data || {}
      /** Settings Feature test:
       *  To test a settings feature, just comment the return line above, and use the following:
       */
      // return {
      //   ...this.$store.state.config.data,
      //   // settingsFeatureToTest: true
      //   emailConnect: false
      // } || {}
    },
    // WTF? Why am I duplicating this? Was I drunk when I coded this?
    // ToDo: Search for places using the 'settings' mixing and upate it to '$settings'.
    //  -> Then, remove the 'settings' mixin
    settings () {
      return this.$settings
    }
  }
}

Vue.mixin(mixin)
