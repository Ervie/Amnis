<template>
<div>
  <h1>Here be player</h1>
  <metadata></metadata>
</div>
</template>

<script>
import {Howl, Howler} from 'howler'
import Metadata from '@/components/Metadata'

export default {
  name: 'Player',
  components: {
    Metadata
  },
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
