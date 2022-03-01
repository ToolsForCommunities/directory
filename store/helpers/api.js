const data = {
  url: '',
  setUrl
}

// function setUrl (url, env) {
function setUrl (url) {
  data.url = url

  // data.url = '/api'
  // if (env !== 'production' && url) {
  //   data.url = url
  // }
}

export default data
