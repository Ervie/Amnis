<template>
  <v-app id="v-app" dark>
    <app-navbar/>
    <router-view />
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
</style>
