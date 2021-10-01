import axios from 'axios'
// import firebase from 'firebase/app'
// import 'firebase/auth'

import api from '@/store/helpers/api'

/**
 */
function getRole (accounts) {
  const subdomain = api.url.split('/')[2].split(':')[0]
  for (let i = 0; i < accounts.length; i += 1) {
    if (accounts[i].subdomain === subdomain) {
      return accounts[i].role || 'user'
    }
  }

  return 'user'
}

export const state = () => ({
  isLogged: false,
  name: null,
  pic: null,
  id: null,
  role: 'guest'
})

export const actions = {
  login ({ commit }, { token }) {
    const data = {
      token
    }
    return axios.post(`${api.url}/auth/login`, data)
      .then(response => response.data)
      .then((user) => {
        if (user && user.token) {
          commit('LOG_IN', user.token)
          commit('SET_DATA', user.account)
        }

        return user.token
      })
  },
  logout ({ commit }) {
    return this.$fire.auth().signOut()
      .then(() => {
        commit('LOG_OUT')
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

export const mutations = {
  LOG_IN (state, token) {
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` }
    state.isLogged = true
  },
  LOG_OUT (state) {
    axios.defaults.headers.common = { Authorization: '' }
    state.isLogged = false
    state.name = null
    state.pic = null
    state.id = null
    state.role = 'guest'
  },
  SET_DATA (state, data) {
    console.log(data)
    state.name = data.name
    state.pic = data.picture
    state.id = data.acc.id || null
    state.role = getRole(data.acc.Group)
  }
}
