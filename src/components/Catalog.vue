<template>
   <v-container grid-list-md text-xs-center>
    <v-layout>
      <v-flex>
       <v-text-field
         append-icon="search"
         name="searchBox"
         label="Search..."
         single-line dark
         v-model="searchedText"/>
     </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-for="channel in filteredChannels" :key="`${channel.id}`" v-on:click="changeChannel(channel.id)">
        <v-card dark width="160px" class="catalogEntry" v-bind:class="{selected: channel.id === currentChannel.id}">
          <v-card-media :src="channel.logoUrl + '.png'" height="150px"></v-card-media>
          <v-card-text class="px-0">{{channel.channelName}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Catalog',
  data () {
    return {
      channels: [],
      searchedText: ''
    }
  },
  computed: {
    currentChannel () {
      return this.$store.getters.getCurrentChannel
    },
    filteredChannels () {
      return this.channels.filter(
        channel => channel.channelName.toLowerCase().includes(this.searchedText.toLowerCase())
      )
    }
  },
  created: function () {
    axios.get(process.env.API_URL + '/api/Channel')
      .then((response) => {
        this.channels = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    changeChannel (id) {
      this.$store.commit('updateChannel', this.channels[id - 1])
    }
  }
}
</script>

<style scoped>
.catalogEntry {
    border: 1px solid rgb(114, 179, 184);
}

.selected {
    border: 4px solid rgb(166, 255, 0);
}
</style>
