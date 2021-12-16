import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: ''
  },
  mutations: {
    setLang: (state, lang) => {state.lang = lang}
  },
  actions: {
    getLang: async context => {
      const res = await axios.get('http://localhost:3000/langs')
      console.log(res.data[0].lang)
      context.commit('setLang', res.data[0].lang)
    }
    
  },
  getters: {
    lang: state => {return state.lang}
  }
})
