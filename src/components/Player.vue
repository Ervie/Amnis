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
    }
  },
  methods: {
    initializePlayer () {
      this.sound = new Howl({
        src: ['http://radio.vgmradio.com:8040/stream'],
        ext: ['mp3'],
        autoplay: true,
        html5: true
      })
      this.sound.play()
      Howler.volume(0.25)
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
