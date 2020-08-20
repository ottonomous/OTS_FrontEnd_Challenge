// Vuex Core
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  messages: [
    {
      id: 0,
      from: 'Sally Barnes',
      subject: 'Project Guidelines',
      message:
        'Hi! Do you have time to discuss the project guidelines tomorrow afternoon?'
    }
  ]
}

const getters = {
  messages(state) {
    return state.messages
  }
}

const mutations = {}

const actions = {}

const store = new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
})

export default store
