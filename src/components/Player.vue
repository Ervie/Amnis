<template>
<div>
</div>
</template>

<script>
import {Howl, Howler} from 'howler'

export default {
  name: 'Player',
  props: ['stationUrl'],
  data () {
    return {
      sound: new Howl({src: ['http://radio.vgmradio.com:8040/stream']})
    }
  },
  computed: {
    isPlaying () {
      return this.$store.getters.getIsPlaying
    },
    currentStationUrl () {
      return this.$store.getters.getCurrentStationUrl
    },
    volume () {
      return this.$store.getters.getVolume
    }
  },
  methods: {
    initializePlayer () {
      this.sound = new Howl({
        src: [this.currentStationUrl],
        ext: ['mp3'],
        autoplay: true,
        html5: true
      })
      this.sound.play()
      Howler.volume(this.volume)
    }
  },
  watch: {
    isPlaying: function () {
      if (this.isPlaying) {
        this.sound.play()
      } else {
        this.sound.pause()
      }
    }
  },
  beforeMount () {
    this.initializePlayer()
  }
}
</script>

<style></style>
