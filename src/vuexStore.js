import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentChannel: {
      name: 'RPGamers Network Radio',
      url: 'http://stream.rpgamers.net:8000/rpgn?_=1428837997C',
      id: 1,
      hasMetadata: true
    },
    isPlaying: false,
    volume: 0.15,
    isUserMobile: false
  },
  getters: {
    getCurrentChannel: state => state.currentChannel,
    getIsPlaying: state => state.isPlaying,
    getVolume: state => state.volume,
    getIsUserMobile: state => state.getIsUserMobile
  },
  mutations: {
    togglePlaying (state, bool) {
      if (bool) state.isPlaying = bool
      else state.isPlaying = !state.isPlaying
    },
    changeVolume (state, integer) {
      state.volume = integer
    },
    updateChannel (state, newChannel) {
      state.currentChannel = newChannel
    },
    updateIsUserMobile (state, boolean) {
      state.isUserMobile = boolean
    }
  },
  actions: {
    togglePlaying: (context, payload) => {
      context.commit('togglePlaying', payload)
    },
    changeVolume: (context, payload) => {
      context.commit('changeVolume', payload)
    },
    updateChannel: (context, payload) => {
      context.commit('updateChannel', payload)
    },
    updateIsUserMobile: (context, payload) => {
      context.commit('updateIsUserMobile', payload)
    }
  }
})
