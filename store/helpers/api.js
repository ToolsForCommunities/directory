const data = {
  url: '',
  setUrl
}

function setUrl (url, env) {
  data.url = '/api'

  if (env !== 'production' && url) {
    data.url = url
  }

  console.log('-> data.url:')
  console.log(data.url)
}

export default data
