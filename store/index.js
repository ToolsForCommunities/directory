import api from '@/store/helpers/api'

/**
 *  Initial app load
 */
function init ({ dispatch }, ctx) {
  // Prepare API URL
  api.setUrl(ctx.$config.VUE_APP_API_URL, ctx.$config.NODE_ENV)

  // Prepare app settings
  dispatch('config/get', { global: true })
}

export const actions = {
  nuxtServerInit: init,
  nuxtClientInit: init
}
