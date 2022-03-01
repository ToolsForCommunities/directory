import api from '@/store/helpers/api'

/**
 *  Initial app load
 */
function init ({ dispatch }, { $config, req }) {
  // Prepare API URL
  // api.setUrl($config.VUE_APP_API_URL, $config.NODE_ENV)
  const host = process.server ? req.headers.host : window.location.host
  let url = `https://${host}/api`
  if ($config.VUE_APP_API_URL) {
    url = $config.VUE_APP_API_URL
  }

  // Set the API base url
  api.setUrl(url)

  // Prepare app settings
  dispatch('config/setHost', host, { global: true })
  dispatch('config/get', { global: true })
}

export const actions = {
  nuxtServerInit: init,
  nuxtClientInit: init
}
