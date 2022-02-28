import Vue from 'vue'

const mixin = {
  computed: {
    settings () {
      return this.$store.state.config.data || {}
    },
    $settings () {
      return this.$store.state.config.data || {}
    }
  }
}

Vue.mixin(mixin)
