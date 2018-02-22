import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentChannelId: 1,
    currentChannelUrl: '',
    isPlaying: true,
    volume: 0.15
  },
  getters: {
    getCurrentChannelId: state => state.currentChannelId,
    getCurrentChannelUrl: state => state.currentChannelUrl,
    getIsPlaying: state => state.isPlaying,
    getVolume: state => state.volume
  },
  mutations: {
    togglePlaying (state, bool) {
      if (bool) state.isPlaying = bool
      else state.isPlaying = !state.isPlaying
    },
    changeVolume (state, integer) {
      state.volume = integer
    },
    updateChannel (state, { newId, newUrl }) {
      state.currentChannelId = newId
      state.currentChannelUrl = newUrl
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
    }
  }
})
