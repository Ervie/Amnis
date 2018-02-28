<template>
  <v-app id="v-app" dark>
    <app-navbar/>
    <router-view id="router-view" />
    <app-musicbar/>
  </v-app>
</template>

<script>
import MusicBar from './components/MusicBar'
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    'app-navbar': NavBar,
    'app-musicbar': MusicBar
  },
  methods: {
    isAgentMobile: function () {
      if (navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)) {
        return true
      } else {
        return false
      }
    }
  },
  created: function () {
    this.$store.commit('updateIsUserMobile', this.isAgentMobile())
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Exo');

#v-app {
  font-family: 'Exo', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #ffffff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#router-view {
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
