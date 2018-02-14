<template>
<div v-text="songTitle">}  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Metadata',
  data () {
    return {
      stationUrl: 'http://radio.vgmradio.com:8040/stream',
      songTitle: 'TestMeta'
    }
  },
  methods: {
    loadMetadata: function () {
      axios.get('/api/Metadata')
        .then((response) => {
          console.log(response.data)
          this.songTitle = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created: function () {
    this.loadMetadata()

    setInterval(function () {
      this.loadMetadata()
    }.bind(this), 3000)
  }
}
</script>

<style></style>
