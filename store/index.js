import api from '@/store/helpers/api'

export const actions = {
  nuxtServerInit ({ dispatch }, ctx) {
    // Prepare API URL
    api.setUrl(ctx.$config.VUE_APP_API_URL, ctx.$config.NODE_ENV)
  },
  nuxtClientInit ({ dispatch }, ctx) {
    // Prepare API URL
    api.setUrl(ctx.$config.VUE_APP_API_URL, ctx.$config.NODE_ENV)
  }
}
