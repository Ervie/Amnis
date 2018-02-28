<template>
<v-container fill-height>
  <v-layout align-center>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-text>
          <h3 class="headline mb-0">
            <p class="text-xs-center" v-if="currentChannel.hasMetadata" v-text="songArtist" />
            <p class="text-xs-center" v-else v-text="currentChannel.channelName" />
          </h3>
        </v-card-text>
        <v-card-media v-bind:src="pathToLogo" height="300px"/>
        <v-card-text>
          <h3 class="headline mb-0">
            <p class="text-xs-center" v-if="currentChannel.hasMetadata" v-text="songTitle" />
          </h3>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MainContent',
  data () {
    return {
      songTitle: '',
      songArtist: ''
    }
  },
  computed: {
    currentChannel () {
      return this.$store.getters.getCurrentChannel
    },
    pathToLogo () {
      return 'static/radioLogos/' + this.currentChannel.id + '.png'
    }
  },
  methods: {
    loadMetadata: function () {
      if (this.currentChannel.hasMetadata) {
        axios.get(process.env.API_URL + '/api/Metadata/' + this.currentChannel.id)
          .then((response) => {
            this.songTitle = response.data.title
            this.songArtist = response.data.artist
          })
          .catch((error) => {
            console.log(error)
            this.songTitle = ''
          })
      }
    }
  },
  timers: {
    loadMetadata: {
      time: 30000,
      repeat: true,
      autostart: true,
      immediate: true
    }
  }
}
</script>

<style scoped>

.container {
  max-width: 950px;
}

</style>
