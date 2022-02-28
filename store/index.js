// import api from '@/store/helpers/api'

/**
 *  Initial app load
 */
function init ({ dispatch }, ctx) {
  // // Prepare axios errors
  // ctx.$axios.onError((error) => {
  //   if (error.response) {
  //     ctx.nuxtError({
  //       statusCode: error.response.status,
  //       message: error.message
  //     })
  //   } else {
  //     ctx.nuxtError({
  //       statusCode: error.status,
  //       message: error.message
  //     })
  //   }
  // })

  // Prepare API URL
  // api.setUrl(ctx.$config.VUE_APP_API_URL, ctx.$config.NODE_ENV)
  if (ctx.$config.VUE_APP_API_URL) {
  // if (ctx.$config.NODE_ENV !== 'production' && ctx.$config.VUE_APP_API_URL) {
    ctx.$axios.defaults.baseURL = `${ctx.$config.VUE_APP_API_URL}/api`
  }
  ctx.$axios.defaults.baseURL = '/api'

  // Prepare app settings
  return dispatch('config/get', { global: true })
}

export const actions = {
  nuxtServerInit: init,
  nuxtClientInit: init
}
