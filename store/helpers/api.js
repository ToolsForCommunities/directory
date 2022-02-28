const data = {
  url: '',
  setUrl
}

function setUrl (url, env) {
  data.url = '/api'

  if (env !== 'production' && url) {
    data.url = url
  }
}

export default data
