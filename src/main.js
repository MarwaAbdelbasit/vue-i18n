import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

//a guard to get country lang from i18n.locale and put it in the router link
router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if(!language) {
    language = 'en'
  }
  i18n.locale = language
  next()
})

Vue.use(BootstrapVue)

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
