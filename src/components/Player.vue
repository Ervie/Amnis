<template>
<h1>Here be player</h1>
</template>

<script>
import {Howl, Howler} from 'howler'

export default {
  name: 'Player',
  methods: {
    initializePlayer: function () {
      const sound = new Howl({
        src: ['http://radio.vgmradio.com:8040/stream'],
        ext: ['mp3'],
        autoplay: true,
        html5: true
      })
      sound.play()

      Howler.volume(0.5)
    }
  },
  beforeMount () {
    this.initializePlayer()
  }
}
</script>

<style></style>
