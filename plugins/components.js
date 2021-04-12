import Vue from 'vue'
import components from '../../components/'

export default ({ app }, inject) => {
  Vue.use(components, {
    vuetify: app.vuetify
  })
}
