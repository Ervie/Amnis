<template>
<v-container fill-height>
  <v-layout align-center>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-text>
          <h3 class="headline mb-0">
            <p class="text-xs-center">
              {{ currentChannel.name }}
            </p>
          </h3>
        </v-card-text>
        <v-card-media src="/static/tanya.png" height="300px"/>
        <v-card-text>
          <h3 class="headline mb-0">
            <p class="text-xs-center">
              <metadata :hasMetadata="currentChannel.hasMetadata" />
            </p>
          </h3>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import Metadata from '@/components/Metadata'

export default {
  name: 'MainContent',
  components: {
    Metadata
  },
  computed: {
    currentChannel () {
      return this.$store.getters.getCurrentChannel
    }
  }
}
</script>

<style scoped>

.container {
  max-width: 950px;
}

</style>
